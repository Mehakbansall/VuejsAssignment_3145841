export interface Profile {
    username: string;
    bio?:string;
    image?: string;
    following: boolean;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?:string;
}

export interface UserForUpdate{
  email?: string;
    username?: string;
    bio?: string;
    image?:string;
    password?:string;
}

export interface UserSubmit{
    email:string;
    password: string;
}

export interface UserRegister{
  username: string;
  email:string;
  password: string;
}

export interface UserResponse{
  user: User;
}

export interface ArticlesResponse {
    articles?: (Article)[] | null;
    articlesCount: number;
  }

  export interface ProfileResponse {
    profile : Profile;
  }

  export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList?: (string)[] | null;
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
  }
  export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  }

  