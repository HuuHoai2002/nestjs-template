import { ParseIntPipe } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketsService } from './websockets.service';

@WebSocketGateway({ cors: true })
export class WebsocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly websocketsService: WebsocketsService) {}

  @WebSocketServer() server: Server;
  wsConnections: Socket[] = [];

  async handleConnection(client: Socket): Promise<void> {
    console.log('Client connected', client.id);
    this.wsConnections.push(client);
  }

  async handleDisconnect(client: Socket): Promise<void> {
    console.log('Client disconnected', client.id);
    this.wsConnections = this.wsConnections.filter(
      (connection) => connection.id !== client.id,
    );
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: ParseIntPipe,
  ): WsResponse<any> {
    console.log('Message received', payload, client.id);
    this.server.emit('message', payload);

    return { event: 'message', data: payload };
  }
}
