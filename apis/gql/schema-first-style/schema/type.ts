import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  student: Student;
  students: Array<Student>;
};


export type QueryStudentArgs = {
  id: Scalars['Int'];
};

export type Student = {
  __typename?: 'Student';
  id: Scalars['Int'];
  name: Scalars['String'];
  information: Information;
  age?: Maybe<Scalars['Int']>;
  isUnderage?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  register: Student;
  update: Student;
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  information: InformationInputTypeNotNull;
  age?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type MutationUpdateArgs = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  information?: Maybe<InformationInputType>;
  age?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type InformationInputTypeNotNull = {
  department: Scalars['String'];
  major: Scalars['String'];
  semester: Scalars['Int'];
  doubleMajor: Scalars['Boolean'];
};

export type InformationInputType = {
  department?: Maybe<Scalars['String']>;
  major?: Maybe<Scalars['String']>;
  semester?: Maybe<Scalars['Int']>;
  doubleMajor?: Maybe<Scalars['Boolean']>;
};

export type Information = {
  __typename?: 'Information';
  department: Scalars['String'];
  major: Scalars['String'];
  semester: Scalars['Int'];
  doubleMajor: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Student: ResolverTypeWrapper<Student>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  informationInputTypeNotNull: InformationInputTypeNotNull;
  InformationInputType: InformationInputType;
  Information: ResolverTypeWrapper<Information>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Book: Book;
  String: Scalars['String'];
  Query: {};
  Int: Scalars['Int'];
  Student: Student;
  Boolean: Scalars['Boolean'];
  Mutation: {};
  informationInputTypeNotNull: InformationInputTypeNotNull;
  InformationInputType: InformationInputType;
  Information: Information;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>;
  student?: Resolver<ResolversTypes['Student'], ParentType, ContextType, RequireFields<QueryStudentArgs, 'id'>>;
  students?: Resolver<Array<ResolversTypes['Student']>, ParentType, ContextType>;
}>;

export type StudentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Student'] = ResolversParentTypes['Student']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  information?: Resolver<ResolversTypes['Information'], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isUnderage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationCreateBookArgs, 'title' | 'author'>>;
  register?: Resolver<ResolversTypes['Student'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'name' | 'information'>>;
  update?: Resolver<ResolversTypes['Student'], ParentType, ContextType, RequireFields<MutationUpdateArgs, 'id'>>;
}>;

export type InformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Information'] = ResolversParentTypes['Information']> = ResolversObject<{
  department?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  major?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  semester?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  doubleMajor?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Student?: StudentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Information?: InformationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
