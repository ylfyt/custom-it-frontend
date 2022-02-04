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
  slug?: Maybe<Scalars['String']>;
  stock: Scalars['Float'];
  store: Store;
  storeId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  me?: Maybe<User>;
  product?: Maybe<Product>;
  productBySlug?: Maybe<Product>;
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


export type QueryProductBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryStoreArgs = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
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

export type RegularProductFragment = { __typename?: 'Product', id: string, name: string, description: string, price: number, stock: number, storeId: string, imageUrl: string, slug?: string | null | undefined, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }>, store: { __typename?: 'Store', id: string, username: string, name: string, address: string } };

export type RegularProductsFragment = { __typename?: 'Product', id: string, name: string, price: number, stock: number, slug?: string | null | undefined, imageUrl: string };

export type RegularUserFragment = { __typename?: 'User', id: string, username: string };

export type CreateCommentMutationVariables = Exact<{
  data: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } } | null | undefined };

export type CreateStoreMutationVariables = Exact<{
  data: CreateStoreInput;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', id: string, name: string, username: string, address: string } | null | undefined };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, username: string } | null | undefined };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'User', id: string, username: string } | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string } | null | undefined };

export type ProductQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, price: number, stock: number, storeId: string, imageUrl: string, slug?: string | null | undefined, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }>, store: { __typename?: 'Store', id: string, username: string, name: string, address: string } } | null | undefined };

export type ProductBySlugQueryVariables = Exact<{
  productSlug: Scalars['String'];
}>;


export type ProductBySlugQuery = { __typename?: 'Query', productBySlug?: { __typename?: 'Product', id: string, name: string, description: string, price: number, stock: number, storeId: string, imageUrl: string, slug?: string | null | undefined, comments: Array<{ __typename?: 'Comment', id: string, text: string, createAt: string, user: { __typename?: 'User', id: string, username: string } }>, store: { __typename?: 'Store', id: string, username: string, name: string, address: string } } | null | undefined };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, price: number, stock: number, slug?: string | null | undefined, imageUrl: string }> };

export type StoreQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type StoreQuery = { __typename?: 'Query', store?: { __typename?: 'Store', id: string, username: string, name: string, address: string } | null | undefined };

export const RegularProductFragmentDoc = gql`
    fragment RegularProduct on Product {
  id
  name
  description
  price
  stock
  storeId
  imageUrl
  slug
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
  slug
  imageUrl
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const CreateCommentDocument = gql`
    mutation CreateComment($data: CreateCommentInput!) {
  createComment(data: $data) {
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

export function useCreateCommentMutation() {
  return Urql.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument);
};
export const CreateStoreDocument = gql`
    mutation CreateStore($data: CreateStoreInput!) {
  createStore(data: $data) {
    id
    name
    username
    address
  }
}
    `;

export function useCreateStoreMutation() {
  return Urql.useMutation<CreateStoreMutation, CreateStoreMutationVariables>(CreateStoreDocument);
};
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
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
export const ProductBySlugDocument = gql`
    query ProductBySlug($productSlug: String!) {
  productBySlug(slug: $productSlug) {
    ...RegularProduct
  }
}
    ${RegularProductFragmentDoc}`;

export function useProductBySlugQuery(options: Omit<Urql.UseQueryArgs<ProductBySlugQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductBySlugQuery>({ query: ProductBySlugDocument, ...options });
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
export const StoreDocument = gql`
    query Store($id: String, $username: String) {
  store(id: $id, username: $username) {
    id
    username
    name
    address
  }
}
    `;

export function useStoreQuery(options: Omit<Urql.UseQueryArgs<StoreQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<StoreQuery>({ query: StoreDocument, ...options });
};