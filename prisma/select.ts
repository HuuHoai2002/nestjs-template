// import { Prisma } from "@prisma/client"

export const Follows = {
  user_select: {
    select: {
      id: true,
      username: true,
      full_name: true,
      first_name: true,
      last_name: true,
      avatar_url: true,
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  },
};

export const Users = {
  user_select: {
    id: true,
    email: true,
    password: true,
    full_name: true,
    bio: true,
    last_name: true,
    first_name: true,
    username: true,
    role: true,
    avatar_url: true,
    address: true,
    phone: true,
    date_of_birth: true,
    is_blocked: true,
    is_comment_blocked: true,
    is_verified: true,
    created_at: true,
    updated_at: true,
    blocked_at: true,
    comment_blocked_at: true,
    _count: {
      select: {
        followers: true,
        following: true,
        posts: true,
        series: true,
      },
    },
  },
};
