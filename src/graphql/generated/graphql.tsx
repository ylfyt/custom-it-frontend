import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  createAt: Scalars['String'];
  id: Scalars['ID'];
  productId: Scalars['String'];
  text: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type CreateCommentInput = {
  productId: Scalars['String'];
  text: Scalars['String'];
};

export type CreateLikeInput = {
  productId: Scalars['String'];
};

export type CreateProductInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
};

export type CreateStoreInput = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  createAt: Scalars['String'];
  id: Scalars['ID'];
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createLike?: Maybe<Like>;
  createProduct?: Maybe<Product>;
  createStore?: Maybe<Store>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  me?: Maybe<User>;
  register?: Maybe<User>;
  updateProduct: Product;
  updateStore?: Maybe<Store>;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreateLikeArgs = {
  data: CreateLikeInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreateStoreArgs = {
  data: CreateStoreInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
  id: Scalars['String'];
};


export type MutationUpdateStoreArgs = {
  data: UpdateStoreInput;
  id: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  comments: Array<Comment>;
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  likes: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Float'];
  store: Store;
  storeId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  product: Product;
  products: Array<Product>;
  store?: Maybe<Store>;
  stores: Array<Store>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryStoreArgs = {
  id: Scalars['String'];
};

export type RegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  address: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Product>;
  username: Scalars['String'];
};

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type RegularProductFragment = { __typename: 'Product', id: string, name: string, description: string, price: number, stock: number, storeId: string, imageUrl: string, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }>, store: { __typename?: 'Store', id: string, username: string, name: string, address: string } };

export type RegularProductsFragment = { __typename: 'Product', id: string, name: string, price: number, stock: number, imageUrl: string, storeId: string, description: string, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }> };

export type ProductQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ProductQuery = { __typename?: 'Query', product: { __typename: 'Product', id: string, name: string, description: string, price: number, stock: number, storeId: string, imageUrl: string, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }>, store: { __typename?: 'Store', id: string, username: string, name: string, address: string } } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename: 'Product', id: string, name: string, price: number, stock: number, imageUrl: string, storeId: string, description: string, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }> }> };

export const RegularProductFragmentDoc = gql`
    fragment RegularProduct on Product {
  id
  name
  description
  price
  stock
  storeId
  imageUrl
  __typename
  comments {
    id
    text
    createAt
    user {
      id
      username
    }
  }
  store {
    id
    username
    name
    address
  }
}
    `;
export const RegularProductsFragmentDoc = gql`
    fragment RegularProducts on Product {
  id
  name
  price
  stock
  imageUrl
  storeId
  description
  __typename
  comments {
    id
    text
    createAt
    user {
      id
      username
    }
  }
}
    `;
export const ProductDocument = gql`
    query Product($productId: String!) {
  product(id: $productId) {
    ...RegularProduct
  }
}
    ${RegularProductFragmentDoc}`;

export function useProductQuery(options: Omit<Urql.UseQueryArgs<ProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductQuery>({ query: ProductDocument, ...options });
};
export const ProductsDocument = gql`
    query Products {
  products {
    ...RegularProducts
  }
}
    ${RegularProductsFragmentDoc}`;

export function useProductsQuery(options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};