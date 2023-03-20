export const toContentsShort = (content: string, max_length = 50) => {
  return content.split(' ').slice(0, max_length).join(' ') + '...';
};
