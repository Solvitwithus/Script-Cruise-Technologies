
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Demonstration
 * 
 */
export type Demonstration = $Result.DefaultSelection<Prisma.$DemonstrationPayload>
/**
 * Model Reachout
 * 
 */
export type Reachout = $Result.DefaultSelection<Prisma.$ReachoutPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Demonstrations
 * const demonstrations = await prisma.demonstration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Demonstrations
   * const demonstrations = await prisma.demonstration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.demonstration`: Exposes CRUD operations for the **Demonstration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demonstrations
    * const demonstrations = await prisma.demonstration.findMany()
    * ```
    */
  get demonstration(): Prisma.DemonstrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reachout`: Exposes CRUD operations for the **Reachout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reachouts
    * const reachouts = await prisma.reachout.findMany()
    * ```
    */
  get reachout(): Prisma.ReachoutDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Demonstration: 'Demonstration',
    Reachout: 'Reachout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "demonstration" | "reachout"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Demonstration: {
        payload: Prisma.$DemonstrationPayload<ExtArgs>
        fields: Prisma.DemonstrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemonstrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemonstrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          findFirst: {
            args: Prisma.DemonstrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemonstrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          findMany: {
            args: Prisma.DemonstrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>[]
          }
          create: {
            args: Prisma.DemonstrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          createMany: {
            args: Prisma.DemonstrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemonstrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>[]
          }
          delete: {
            args: Prisma.DemonstrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          update: {
            args: Prisma.DemonstrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          deleteMany: {
            args: Prisma.DemonstrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemonstrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemonstrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>[]
          }
          upsert: {
            args: Prisma.DemonstrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemonstrationPayload>
          }
          aggregate: {
            args: Prisma.DemonstrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemonstration>
          }
          groupBy: {
            args: Prisma.DemonstrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemonstrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemonstrationCountArgs<ExtArgs>
            result: $Utils.Optional<DemonstrationCountAggregateOutputType> | number
          }
        }
      }
      Reachout: {
        payload: Prisma.$ReachoutPayload<ExtArgs>
        fields: Prisma.ReachoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReachoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReachoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          findFirst: {
            args: Prisma.ReachoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReachoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          findMany: {
            args: Prisma.ReachoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>[]
          }
          create: {
            args: Prisma.ReachoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          createMany: {
            args: Prisma.ReachoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReachoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>[]
          }
          delete: {
            args: Prisma.ReachoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          update: {
            args: Prisma.ReachoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          deleteMany: {
            args: Prisma.ReachoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReachoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReachoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>[]
          }
          upsert: {
            args: Prisma.ReachoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReachoutPayload>
          }
          aggregate: {
            args: Prisma.ReachoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReachout>
          }
          groupBy: {
            args: Prisma.ReachoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReachoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReachoutCountArgs<ExtArgs>
            result: $Utils.Optional<ReachoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    demonstration?: DemonstrationOmit
    reachout?: ReachoutOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Demonstration
   */

  export type AggregateDemonstration = {
    _count: DemonstrationCountAggregateOutputType | null
    _min: DemonstrationMinAggregateOutputType | null
    _max: DemonstrationMaxAggregateOutputType | null
  }

  export type DemonstrationMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    date: Date | null
    time: Date | null
    notes: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DemonstrationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    date: Date | null
    time: Date | null
    notes: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type DemonstrationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    date: number
    time: number
    notes: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type DemonstrationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    date?: true
    time?: true
    notes?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DemonstrationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    date?: true
    time?: true
    notes?: true
    updatedAt?: true
    createdAt?: true
  }

  export type DemonstrationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    date?: true
    time?: true
    notes?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type DemonstrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demonstration to aggregate.
     */
    where?: DemonstrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demonstrations to fetch.
     */
    orderBy?: DemonstrationOrderByWithRelationInput | DemonstrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemonstrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demonstrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demonstrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demonstrations
    **/
    _count?: true | DemonstrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemonstrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemonstrationMaxAggregateInputType
  }

  export type GetDemonstrationAggregateType<T extends DemonstrationAggregateArgs> = {
        [P in keyof T & keyof AggregateDemonstration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemonstration[P]>
      : GetScalarType<T[P], AggregateDemonstration[P]>
  }




  export type DemonstrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemonstrationWhereInput
    orderBy?: DemonstrationOrderByWithAggregationInput | DemonstrationOrderByWithAggregationInput[]
    by: DemonstrationScalarFieldEnum[] | DemonstrationScalarFieldEnum
    having?: DemonstrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemonstrationCountAggregateInputType | true
    _min?: DemonstrationMinAggregateInputType
    _max?: DemonstrationMaxAggregateInputType
  }

  export type DemonstrationGroupByOutputType = {
    id: string
    name: string
    email: string
    company: string
    date: Date
    time: Date
    notes: string | null
    updatedAt: Date
    createdAt: Date
    _count: DemonstrationCountAggregateOutputType | null
    _min: DemonstrationMinAggregateOutputType | null
    _max: DemonstrationMaxAggregateOutputType | null
  }

  type GetDemonstrationGroupByPayload<T extends DemonstrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemonstrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemonstrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemonstrationGroupByOutputType[P]>
            : GetScalarType<T[P], DemonstrationGroupByOutputType[P]>
        }
      >
    >


  export type DemonstrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["demonstration"]>

  export type DemonstrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["demonstration"]>

  export type DemonstrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["demonstration"]>

  export type DemonstrationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type DemonstrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "company" | "date" | "time" | "notes" | "updatedAt" | "createdAt", ExtArgs["result"]["demonstration"]>

  export type $DemonstrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demonstration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      company: string
      date: Date
      time: Date
      notes: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["demonstration"]>
    composites: {}
  }

  type DemonstrationGetPayload<S extends boolean | null | undefined | DemonstrationDefaultArgs> = $Result.GetResult<Prisma.$DemonstrationPayload, S>

  type DemonstrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemonstrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemonstrationCountAggregateInputType | true
    }

  export interface DemonstrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demonstration'], meta: { name: 'Demonstration' } }
    /**
     * Find zero or one Demonstration that matches the filter.
     * @param {DemonstrationFindUniqueArgs} args - Arguments to find a Demonstration
     * @example
     * // Get one Demonstration
     * const demonstration = await prisma.demonstration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemonstrationFindUniqueArgs>(args: SelectSubset<T, DemonstrationFindUniqueArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demonstration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemonstrationFindUniqueOrThrowArgs} args - Arguments to find a Demonstration
     * @example
     * // Get one Demonstration
     * const demonstration = await prisma.demonstration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemonstrationFindUniqueOrThrowArgs>(args: SelectSubset<T, DemonstrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demonstration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationFindFirstArgs} args - Arguments to find a Demonstration
     * @example
     * // Get one Demonstration
     * const demonstration = await prisma.demonstration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemonstrationFindFirstArgs>(args?: SelectSubset<T, DemonstrationFindFirstArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demonstration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationFindFirstOrThrowArgs} args - Arguments to find a Demonstration
     * @example
     * // Get one Demonstration
     * const demonstration = await prisma.demonstration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemonstrationFindFirstOrThrowArgs>(args?: SelectSubset<T, DemonstrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demonstrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demonstrations
     * const demonstrations = await prisma.demonstration.findMany()
     * 
     * // Get first 10 Demonstrations
     * const demonstrations = await prisma.demonstration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demonstrationWithIdOnly = await prisma.demonstration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemonstrationFindManyArgs>(args?: SelectSubset<T, DemonstrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demonstration.
     * @param {DemonstrationCreateArgs} args - Arguments to create a Demonstration.
     * @example
     * // Create one Demonstration
     * const Demonstration = await prisma.demonstration.create({
     *   data: {
     *     // ... data to create a Demonstration
     *   }
     * })
     * 
     */
    create<T extends DemonstrationCreateArgs>(args: SelectSubset<T, DemonstrationCreateArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demonstrations.
     * @param {DemonstrationCreateManyArgs} args - Arguments to create many Demonstrations.
     * @example
     * // Create many Demonstrations
     * const demonstration = await prisma.demonstration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemonstrationCreateManyArgs>(args?: SelectSubset<T, DemonstrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demonstrations and returns the data saved in the database.
     * @param {DemonstrationCreateManyAndReturnArgs} args - Arguments to create many Demonstrations.
     * @example
     * // Create many Demonstrations
     * const demonstration = await prisma.demonstration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demonstrations and only return the `id`
     * const demonstrationWithIdOnly = await prisma.demonstration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemonstrationCreateManyAndReturnArgs>(args?: SelectSubset<T, DemonstrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demonstration.
     * @param {DemonstrationDeleteArgs} args - Arguments to delete one Demonstration.
     * @example
     * // Delete one Demonstration
     * const Demonstration = await prisma.demonstration.delete({
     *   where: {
     *     // ... filter to delete one Demonstration
     *   }
     * })
     * 
     */
    delete<T extends DemonstrationDeleteArgs>(args: SelectSubset<T, DemonstrationDeleteArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demonstration.
     * @param {DemonstrationUpdateArgs} args - Arguments to update one Demonstration.
     * @example
     * // Update one Demonstration
     * const demonstration = await prisma.demonstration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemonstrationUpdateArgs>(args: SelectSubset<T, DemonstrationUpdateArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demonstrations.
     * @param {DemonstrationDeleteManyArgs} args - Arguments to filter Demonstrations to delete.
     * @example
     * // Delete a few Demonstrations
     * const { count } = await prisma.demonstration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemonstrationDeleteManyArgs>(args?: SelectSubset<T, DemonstrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demonstrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demonstrations
     * const demonstration = await prisma.demonstration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemonstrationUpdateManyArgs>(args: SelectSubset<T, DemonstrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demonstrations and returns the data updated in the database.
     * @param {DemonstrationUpdateManyAndReturnArgs} args - Arguments to update many Demonstrations.
     * @example
     * // Update many Demonstrations
     * const demonstration = await prisma.demonstration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demonstrations and only return the `id`
     * const demonstrationWithIdOnly = await prisma.demonstration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DemonstrationUpdateManyAndReturnArgs>(args: SelectSubset<T, DemonstrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demonstration.
     * @param {DemonstrationUpsertArgs} args - Arguments to update or create a Demonstration.
     * @example
     * // Update or create a Demonstration
     * const demonstration = await prisma.demonstration.upsert({
     *   create: {
     *     // ... data to create a Demonstration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demonstration we want to update
     *   }
     * })
     */
    upsert<T extends DemonstrationUpsertArgs>(args: SelectSubset<T, DemonstrationUpsertArgs<ExtArgs>>): Prisma__DemonstrationClient<$Result.GetResult<Prisma.$DemonstrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demonstrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationCountArgs} args - Arguments to filter Demonstrations to count.
     * @example
     * // Count the number of Demonstrations
     * const count = await prisma.demonstration.count({
     *   where: {
     *     // ... the filter for the Demonstrations we want to count
     *   }
     * })
    **/
    count<T extends DemonstrationCountArgs>(
      args?: Subset<T, DemonstrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemonstrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demonstration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemonstrationAggregateArgs>(args: Subset<T, DemonstrationAggregateArgs>): Prisma.PrismaPromise<GetDemonstrationAggregateType<T>>

    /**
     * Group by Demonstration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemonstrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemonstrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemonstrationGroupByArgs['orderBy'] }
        : { orderBy?: DemonstrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemonstrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemonstrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demonstration model
   */
  readonly fields: DemonstrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demonstration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemonstrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Demonstration model
   */
  interface DemonstrationFieldRefs {
    readonly id: FieldRef<"Demonstration", 'String'>
    readonly name: FieldRef<"Demonstration", 'String'>
    readonly email: FieldRef<"Demonstration", 'String'>
    readonly company: FieldRef<"Demonstration", 'String'>
    readonly date: FieldRef<"Demonstration", 'DateTime'>
    readonly time: FieldRef<"Demonstration", 'DateTime'>
    readonly notes: FieldRef<"Demonstration", 'String'>
    readonly updatedAt: FieldRef<"Demonstration", 'DateTime'>
    readonly createdAt: FieldRef<"Demonstration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Demonstration findUnique
   */
  export type DemonstrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter, which Demonstration to fetch.
     */
    where: DemonstrationWhereUniqueInput
  }

  /**
   * Demonstration findUniqueOrThrow
   */
  export type DemonstrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter, which Demonstration to fetch.
     */
    where: DemonstrationWhereUniqueInput
  }

  /**
   * Demonstration findFirst
   */
  export type DemonstrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter, which Demonstration to fetch.
     */
    where?: DemonstrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demonstrations to fetch.
     */
    orderBy?: DemonstrationOrderByWithRelationInput | DemonstrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demonstrations.
     */
    cursor?: DemonstrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demonstrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demonstrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demonstrations.
     */
    distinct?: DemonstrationScalarFieldEnum | DemonstrationScalarFieldEnum[]
  }

  /**
   * Demonstration findFirstOrThrow
   */
  export type DemonstrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter, which Demonstration to fetch.
     */
    where?: DemonstrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demonstrations to fetch.
     */
    orderBy?: DemonstrationOrderByWithRelationInput | DemonstrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demonstrations.
     */
    cursor?: DemonstrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demonstrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demonstrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demonstrations.
     */
    distinct?: DemonstrationScalarFieldEnum | DemonstrationScalarFieldEnum[]
  }

  /**
   * Demonstration findMany
   */
  export type DemonstrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter, which Demonstrations to fetch.
     */
    where?: DemonstrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demonstrations to fetch.
     */
    orderBy?: DemonstrationOrderByWithRelationInput | DemonstrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demonstrations.
     */
    cursor?: DemonstrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demonstrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demonstrations.
     */
    skip?: number
    distinct?: DemonstrationScalarFieldEnum | DemonstrationScalarFieldEnum[]
  }

  /**
   * Demonstration create
   */
  export type DemonstrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * The data needed to create a Demonstration.
     */
    data: XOR<DemonstrationCreateInput, DemonstrationUncheckedCreateInput>
  }

  /**
   * Demonstration createMany
   */
  export type DemonstrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demonstrations.
     */
    data: DemonstrationCreateManyInput | DemonstrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demonstration createManyAndReturn
   */
  export type DemonstrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * The data used to create many Demonstrations.
     */
    data: DemonstrationCreateManyInput | DemonstrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demonstration update
   */
  export type DemonstrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * The data needed to update a Demonstration.
     */
    data: XOR<DemonstrationUpdateInput, DemonstrationUncheckedUpdateInput>
    /**
     * Choose, which Demonstration to update.
     */
    where: DemonstrationWhereUniqueInput
  }

  /**
   * Demonstration updateMany
   */
  export type DemonstrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demonstrations.
     */
    data: XOR<DemonstrationUpdateManyMutationInput, DemonstrationUncheckedUpdateManyInput>
    /**
     * Filter which Demonstrations to update
     */
    where?: DemonstrationWhereInput
    /**
     * Limit how many Demonstrations to update.
     */
    limit?: number
  }

  /**
   * Demonstration updateManyAndReturn
   */
  export type DemonstrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * The data used to update Demonstrations.
     */
    data: XOR<DemonstrationUpdateManyMutationInput, DemonstrationUncheckedUpdateManyInput>
    /**
     * Filter which Demonstrations to update
     */
    where?: DemonstrationWhereInput
    /**
     * Limit how many Demonstrations to update.
     */
    limit?: number
  }

  /**
   * Demonstration upsert
   */
  export type DemonstrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * The filter to search for the Demonstration to update in case it exists.
     */
    where: DemonstrationWhereUniqueInput
    /**
     * In case the Demonstration found by the `where` argument doesn't exist, create a new Demonstration with this data.
     */
    create: XOR<DemonstrationCreateInput, DemonstrationUncheckedCreateInput>
    /**
     * In case the Demonstration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemonstrationUpdateInput, DemonstrationUncheckedUpdateInput>
  }

  /**
   * Demonstration delete
   */
  export type DemonstrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
    /**
     * Filter which Demonstration to delete.
     */
    where: DemonstrationWhereUniqueInput
  }

  /**
   * Demonstration deleteMany
   */
  export type DemonstrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demonstrations to delete
     */
    where?: DemonstrationWhereInput
    /**
     * Limit how many Demonstrations to delete.
     */
    limit?: number
  }

  /**
   * Demonstration without action
   */
  export type DemonstrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demonstration
     */
    select?: DemonstrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demonstration
     */
    omit?: DemonstrationOmit<ExtArgs> | null
  }


  /**
   * Model Reachout
   */

  export type AggregateReachout = {
    _count: ReachoutCountAggregateOutputType | null
    _min: ReachoutMinAggregateOutputType | null
    _max: ReachoutMaxAggregateOutputType | null
  }

  export type ReachoutMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    createdAt: Date | null
    companyName: string | null
    industry: string | null
    employees: string | null
    location: string | null
    websiteUrl: string | null
    Description: string | null
  }

  export type ReachoutMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    createdAt: Date | null
    companyName: string | null
    industry: string | null
    employees: string | null
    location: string | null
    websiteUrl: string | null
    Description: string | null
  }

  export type ReachoutCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    companyName: number
    industry: number
    employees: number
    location: number
    websiteUrl: number
    Description: number
    _all: number
  }


  export type ReachoutMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    companyName?: true
    industry?: true
    employees?: true
    location?: true
    websiteUrl?: true
    Description?: true
  }

  export type ReachoutMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    companyName?: true
    industry?: true
    employees?: true
    location?: true
    websiteUrl?: true
    Description?: true
  }

  export type ReachoutCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    companyName?: true
    industry?: true
    employees?: true
    location?: true
    websiteUrl?: true
    Description?: true
    _all?: true
  }

  export type ReachoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reachout to aggregate.
     */
    where?: ReachoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reachouts to fetch.
     */
    orderBy?: ReachoutOrderByWithRelationInput | ReachoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReachoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reachouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reachouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reachouts
    **/
    _count?: true | ReachoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReachoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReachoutMaxAggregateInputType
  }

  export type GetReachoutAggregateType<T extends ReachoutAggregateArgs> = {
        [P in keyof T & keyof AggregateReachout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReachout[P]>
      : GetScalarType<T[P], AggregateReachout[P]>
  }




  export type ReachoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReachoutWhereInput
    orderBy?: ReachoutOrderByWithAggregationInput | ReachoutOrderByWithAggregationInput[]
    by: ReachoutScalarFieldEnum[] | ReachoutScalarFieldEnum
    having?: ReachoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReachoutCountAggregateInputType | true
    _min?: ReachoutMinAggregateInputType
    _max?: ReachoutMaxAggregateInputType
  }

  export type ReachoutGroupByOutputType = {
    id: string
    updatedAt: Date
    createdAt: Date
    companyName: string
    industry: string
    employees: string
    location: string
    websiteUrl: string | null
    Description: string
    _count: ReachoutCountAggregateOutputType | null
    _min: ReachoutMinAggregateOutputType | null
    _max: ReachoutMaxAggregateOutputType | null
  }

  type GetReachoutGroupByPayload<T extends ReachoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReachoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReachoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReachoutGroupByOutputType[P]>
            : GetScalarType<T[P], ReachoutGroupByOutputType[P]>
        }
      >
    >


  export type ReachoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    companyName?: boolean
    industry?: boolean
    employees?: boolean
    location?: boolean
    websiteUrl?: boolean
    Description?: boolean
  }, ExtArgs["result"]["reachout"]>

  export type ReachoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    companyName?: boolean
    industry?: boolean
    employees?: boolean
    location?: boolean
    websiteUrl?: boolean
    Description?: boolean
  }, ExtArgs["result"]["reachout"]>

  export type ReachoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    companyName?: boolean
    industry?: boolean
    employees?: boolean
    location?: boolean
    websiteUrl?: boolean
    Description?: boolean
  }, ExtArgs["result"]["reachout"]>

  export type ReachoutSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    companyName?: boolean
    industry?: boolean
    employees?: boolean
    location?: boolean
    websiteUrl?: boolean
    Description?: boolean
  }

  export type ReachoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt" | "createdAt" | "companyName" | "industry" | "employees" | "location" | "websiteUrl" | "Description", ExtArgs["result"]["reachout"]>

  export type $ReachoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reachout"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
      createdAt: Date
      companyName: string
      industry: string
      employees: string
      location: string
      websiteUrl: string | null
      Description: string
    }, ExtArgs["result"]["reachout"]>
    composites: {}
  }

  type ReachoutGetPayload<S extends boolean | null | undefined | ReachoutDefaultArgs> = $Result.GetResult<Prisma.$ReachoutPayload, S>

  type ReachoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReachoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReachoutCountAggregateInputType | true
    }

  export interface ReachoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reachout'], meta: { name: 'Reachout' } }
    /**
     * Find zero or one Reachout that matches the filter.
     * @param {ReachoutFindUniqueArgs} args - Arguments to find a Reachout
     * @example
     * // Get one Reachout
     * const reachout = await prisma.reachout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReachoutFindUniqueArgs>(args: SelectSubset<T, ReachoutFindUniqueArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reachout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReachoutFindUniqueOrThrowArgs} args - Arguments to find a Reachout
     * @example
     * // Get one Reachout
     * const reachout = await prisma.reachout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReachoutFindUniqueOrThrowArgs>(args: SelectSubset<T, ReachoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reachout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutFindFirstArgs} args - Arguments to find a Reachout
     * @example
     * // Get one Reachout
     * const reachout = await prisma.reachout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReachoutFindFirstArgs>(args?: SelectSubset<T, ReachoutFindFirstArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reachout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutFindFirstOrThrowArgs} args - Arguments to find a Reachout
     * @example
     * // Get one Reachout
     * const reachout = await prisma.reachout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReachoutFindFirstOrThrowArgs>(args?: SelectSubset<T, ReachoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reachouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reachouts
     * const reachouts = await prisma.reachout.findMany()
     * 
     * // Get first 10 Reachouts
     * const reachouts = await prisma.reachout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reachoutWithIdOnly = await prisma.reachout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReachoutFindManyArgs>(args?: SelectSubset<T, ReachoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reachout.
     * @param {ReachoutCreateArgs} args - Arguments to create a Reachout.
     * @example
     * // Create one Reachout
     * const Reachout = await prisma.reachout.create({
     *   data: {
     *     // ... data to create a Reachout
     *   }
     * })
     * 
     */
    create<T extends ReachoutCreateArgs>(args: SelectSubset<T, ReachoutCreateArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reachouts.
     * @param {ReachoutCreateManyArgs} args - Arguments to create many Reachouts.
     * @example
     * // Create many Reachouts
     * const reachout = await prisma.reachout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReachoutCreateManyArgs>(args?: SelectSubset<T, ReachoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reachouts and returns the data saved in the database.
     * @param {ReachoutCreateManyAndReturnArgs} args - Arguments to create many Reachouts.
     * @example
     * // Create many Reachouts
     * const reachout = await prisma.reachout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reachouts and only return the `id`
     * const reachoutWithIdOnly = await prisma.reachout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReachoutCreateManyAndReturnArgs>(args?: SelectSubset<T, ReachoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reachout.
     * @param {ReachoutDeleteArgs} args - Arguments to delete one Reachout.
     * @example
     * // Delete one Reachout
     * const Reachout = await prisma.reachout.delete({
     *   where: {
     *     // ... filter to delete one Reachout
     *   }
     * })
     * 
     */
    delete<T extends ReachoutDeleteArgs>(args: SelectSubset<T, ReachoutDeleteArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reachout.
     * @param {ReachoutUpdateArgs} args - Arguments to update one Reachout.
     * @example
     * // Update one Reachout
     * const reachout = await prisma.reachout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReachoutUpdateArgs>(args: SelectSubset<T, ReachoutUpdateArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reachouts.
     * @param {ReachoutDeleteManyArgs} args - Arguments to filter Reachouts to delete.
     * @example
     * // Delete a few Reachouts
     * const { count } = await prisma.reachout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReachoutDeleteManyArgs>(args?: SelectSubset<T, ReachoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reachouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reachouts
     * const reachout = await prisma.reachout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReachoutUpdateManyArgs>(args: SelectSubset<T, ReachoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reachouts and returns the data updated in the database.
     * @param {ReachoutUpdateManyAndReturnArgs} args - Arguments to update many Reachouts.
     * @example
     * // Update many Reachouts
     * const reachout = await prisma.reachout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reachouts and only return the `id`
     * const reachoutWithIdOnly = await prisma.reachout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReachoutUpdateManyAndReturnArgs>(args: SelectSubset<T, ReachoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reachout.
     * @param {ReachoutUpsertArgs} args - Arguments to update or create a Reachout.
     * @example
     * // Update or create a Reachout
     * const reachout = await prisma.reachout.upsert({
     *   create: {
     *     // ... data to create a Reachout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reachout we want to update
     *   }
     * })
     */
    upsert<T extends ReachoutUpsertArgs>(args: SelectSubset<T, ReachoutUpsertArgs<ExtArgs>>): Prisma__ReachoutClient<$Result.GetResult<Prisma.$ReachoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reachouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutCountArgs} args - Arguments to filter Reachouts to count.
     * @example
     * // Count the number of Reachouts
     * const count = await prisma.reachout.count({
     *   where: {
     *     // ... the filter for the Reachouts we want to count
     *   }
     * })
    **/
    count<T extends ReachoutCountArgs>(
      args?: Subset<T, ReachoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReachoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reachout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReachoutAggregateArgs>(args: Subset<T, ReachoutAggregateArgs>): Prisma.PrismaPromise<GetReachoutAggregateType<T>>

    /**
     * Group by Reachout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReachoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReachoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReachoutGroupByArgs['orderBy'] }
        : { orderBy?: ReachoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReachoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReachoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reachout model
   */
  readonly fields: ReachoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reachout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReachoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reachout model
   */
  interface ReachoutFieldRefs {
    readonly id: FieldRef<"Reachout", 'String'>
    readonly updatedAt: FieldRef<"Reachout", 'DateTime'>
    readonly createdAt: FieldRef<"Reachout", 'DateTime'>
    readonly companyName: FieldRef<"Reachout", 'String'>
    readonly industry: FieldRef<"Reachout", 'String'>
    readonly employees: FieldRef<"Reachout", 'String'>
    readonly location: FieldRef<"Reachout", 'String'>
    readonly websiteUrl: FieldRef<"Reachout", 'String'>
    readonly Description: FieldRef<"Reachout", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reachout findUnique
   */
  export type ReachoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter, which Reachout to fetch.
     */
    where: ReachoutWhereUniqueInput
  }

  /**
   * Reachout findUniqueOrThrow
   */
  export type ReachoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter, which Reachout to fetch.
     */
    where: ReachoutWhereUniqueInput
  }

  /**
   * Reachout findFirst
   */
  export type ReachoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter, which Reachout to fetch.
     */
    where?: ReachoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reachouts to fetch.
     */
    orderBy?: ReachoutOrderByWithRelationInput | ReachoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reachouts.
     */
    cursor?: ReachoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reachouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reachouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reachouts.
     */
    distinct?: ReachoutScalarFieldEnum | ReachoutScalarFieldEnum[]
  }

  /**
   * Reachout findFirstOrThrow
   */
  export type ReachoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter, which Reachout to fetch.
     */
    where?: ReachoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reachouts to fetch.
     */
    orderBy?: ReachoutOrderByWithRelationInput | ReachoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reachouts.
     */
    cursor?: ReachoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reachouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reachouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reachouts.
     */
    distinct?: ReachoutScalarFieldEnum | ReachoutScalarFieldEnum[]
  }

  /**
   * Reachout findMany
   */
  export type ReachoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter, which Reachouts to fetch.
     */
    where?: ReachoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reachouts to fetch.
     */
    orderBy?: ReachoutOrderByWithRelationInput | ReachoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reachouts.
     */
    cursor?: ReachoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reachouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reachouts.
     */
    skip?: number
    distinct?: ReachoutScalarFieldEnum | ReachoutScalarFieldEnum[]
  }

  /**
   * Reachout create
   */
  export type ReachoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * The data needed to create a Reachout.
     */
    data: XOR<ReachoutCreateInput, ReachoutUncheckedCreateInput>
  }

  /**
   * Reachout createMany
   */
  export type ReachoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reachouts.
     */
    data: ReachoutCreateManyInput | ReachoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reachout createManyAndReturn
   */
  export type ReachoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * The data used to create many Reachouts.
     */
    data: ReachoutCreateManyInput | ReachoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reachout update
   */
  export type ReachoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * The data needed to update a Reachout.
     */
    data: XOR<ReachoutUpdateInput, ReachoutUncheckedUpdateInput>
    /**
     * Choose, which Reachout to update.
     */
    where: ReachoutWhereUniqueInput
  }

  /**
   * Reachout updateMany
   */
  export type ReachoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reachouts.
     */
    data: XOR<ReachoutUpdateManyMutationInput, ReachoutUncheckedUpdateManyInput>
    /**
     * Filter which Reachouts to update
     */
    where?: ReachoutWhereInput
    /**
     * Limit how many Reachouts to update.
     */
    limit?: number
  }

  /**
   * Reachout updateManyAndReturn
   */
  export type ReachoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * The data used to update Reachouts.
     */
    data: XOR<ReachoutUpdateManyMutationInput, ReachoutUncheckedUpdateManyInput>
    /**
     * Filter which Reachouts to update
     */
    where?: ReachoutWhereInput
    /**
     * Limit how many Reachouts to update.
     */
    limit?: number
  }

  /**
   * Reachout upsert
   */
  export type ReachoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * The filter to search for the Reachout to update in case it exists.
     */
    where: ReachoutWhereUniqueInput
    /**
     * In case the Reachout found by the `where` argument doesn't exist, create a new Reachout with this data.
     */
    create: XOR<ReachoutCreateInput, ReachoutUncheckedCreateInput>
    /**
     * In case the Reachout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReachoutUpdateInput, ReachoutUncheckedUpdateInput>
  }

  /**
   * Reachout delete
   */
  export type ReachoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
    /**
     * Filter which Reachout to delete.
     */
    where: ReachoutWhereUniqueInput
  }

  /**
   * Reachout deleteMany
   */
  export type ReachoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reachouts to delete
     */
    where?: ReachoutWhereInput
    /**
     * Limit how many Reachouts to delete.
     */
    limit?: number
  }

  /**
   * Reachout without action
   */
  export type ReachoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reachout
     */
    select?: ReachoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reachout
     */
    omit?: ReachoutOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DemonstrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    date: 'date',
    time: 'time',
    notes: 'notes',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type DemonstrationScalarFieldEnum = (typeof DemonstrationScalarFieldEnum)[keyof typeof DemonstrationScalarFieldEnum]


  export const ReachoutScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    companyName: 'companyName',
    industry: 'industry',
    employees: 'employees',
    location: 'location',
    websiteUrl: 'websiteUrl',
    Description: 'Description'
  };

  export type ReachoutScalarFieldEnum = (typeof ReachoutScalarFieldEnum)[keyof typeof ReachoutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DemonstrationWhereInput = {
    AND?: DemonstrationWhereInput | DemonstrationWhereInput[]
    OR?: DemonstrationWhereInput[]
    NOT?: DemonstrationWhereInput | DemonstrationWhereInput[]
    id?: StringFilter<"Demonstration"> | string
    name?: StringFilter<"Demonstration"> | string
    email?: StringFilter<"Demonstration"> | string
    company?: StringFilter<"Demonstration"> | string
    date?: DateTimeFilter<"Demonstration"> | Date | string
    time?: DateTimeFilter<"Demonstration"> | Date | string
    notes?: StringNullableFilter<"Demonstration"> | string | null
    updatedAt?: DateTimeFilter<"Demonstration"> | Date | string
    createdAt?: DateTimeFilter<"Demonstration"> | Date | string
  }

  export type DemonstrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DemonstrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemonstrationWhereInput | DemonstrationWhereInput[]
    OR?: DemonstrationWhereInput[]
    NOT?: DemonstrationWhereInput | DemonstrationWhereInput[]
    name?: StringFilter<"Demonstration"> | string
    email?: StringFilter<"Demonstration"> | string
    company?: StringFilter<"Demonstration"> | string
    date?: DateTimeFilter<"Demonstration"> | Date | string
    time?: DateTimeFilter<"Demonstration"> | Date | string
    notes?: StringNullableFilter<"Demonstration"> | string | null
    updatedAt?: DateTimeFilter<"Demonstration"> | Date | string
    createdAt?: DateTimeFilter<"Demonstration"> | Date | string
  }, "id">

  export type DemonstrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: DemonstrationCountOrderByAggregateInput
    _max?: DemonstrationMaxOrderByAggregateInput
    _min?: DemonstrationMinOrderByAggregateInput
  }

  export type DemonstrationScalarWhereWithAggregatesInput = {
    AND?: DemonstrationScalarWhereWithAggregatesInput | DemonstrationScalarWhereWithAggregatesInput[]
    OR?: DemonstrationScalarWhereWithAggregatesInput[]
    NOT?: DemonstrationScalarWhereWithAggregatesInput | DemonstrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demonstration"> | string
    name?: StringWithAggregatesFilter<"Demonstration"> | string
    email?: StringWithAggregatesFilter<"Demonstration"> | string
    company?: StringWithAggregatesFilter<"Demonstration"> | string
    date?: DateTimeWithAggregatesFilter<"Demonstration"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Demonstration"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Demonstration"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Demonstration"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Demonstration"> | Date | string
  }

  export type ReachoutWhereInput = {
    AND?: ReachoutWhereInput | ReachoutWhereInput[]
    OR?: ReachoutWhereInput[]
    NOT?: ReachoutWhereInput | ReachoutWhereInput[]
    id?: StringFilter<"Reachout"> | string
    updatedAt?: DateTimeFilter<"Reachout"> | Date | string
    createdAt?: DateTimeFilter<"Reachout"> | Date | string
    companyName?: StringFilter<"Reachout"> | string
    industry?: StringFilter<"Reachout"> | string
    employees?: StringFilter<"Reachout"> | string
    location?: StringFilter<"Reachout"> | string
    websiteUrl?: StringNullableFilter<"Reachout"> | string | null
    Description?: StringFilter<"Reachout"> | string
  }

  export type ReachoutOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    employees?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    Description?: SortOrder
  }

  export type ReachoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReachoutWhereInput | ReachoutWhereInput[]
    OR?: ReachoutWhereInput[]
    NOT?: ReachoutWhereInput | ReachoutWhereInput[]
    updatedAt?: DateTimeFilter<"Reachout"> | Date | string
    createdAt?: DateTimeFilter<"Reachout"> | Date | string
    companyName?: StringFilter<"Reachout"> | string
    industry?: StringFilter<"Reachout"> | string
    employees?: StringFilter<"Reachout"> | string
    location?: StringFilter<"Reachout"> | string
    websiteUrl?: StringNullableFilter<"Reachout"> | string | null
    Description?: StringFilter<"Reachout"> | string
  }, "id">

  export type ReachoutOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    employees?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    Description?: SortOrder
    _count?: ReachoutCountOrderByAggregateInput
    _max?: ReachoutMaxOrderByAggregateInput
    _min?: ReachoutMinOrderByAggregateInput
  }

  export type ReachoutScalarWhereWithAggregatesInput = {
    AND?: ReachoutScalarWhereWithAggregatesInput | ReachoutScalarWhereWithAggregatesInput[]
    OR?: ReachoutScalarWhereWithAggregatesInput[]
    NOT?: ReachoutScalarWhereWithAggregatesInput | ReachoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reachout"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reachout"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Reachout"> | Date | string
    companyName?: StringWithAggregatesFilter<"Reachout"> | string
    industry?: StringWithAggregatesFilter<"Reachout"> | string
    employees?: StringWithAggregatesFilter<"Reachout"> | string
    location?: StringWithAggregatesFilter<"Reachout"> | string
    websiteUrl?: StringNullableWithAggregatesFilter<"Reachout"> | string | null
    Description?: StringWithAggregatesFilter<"Reachout"> | string
  }

  export type DemonstrationCreateInput = {
    id?: string
    name: string
    email: string
    company: string
    date: Date | string
    time: Date | string
    notes?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DemonstrationUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    company: string
    date: Date | string
    time: Date | string
    notes?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DemonstrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemonstrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemonstrationCreateManyInput = {
    id?: string
    name: string
    email: string
    company: string
    date: Date | string
    time: Date | string
    notes?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type DemonstrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemonstrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReachoutCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    companyName: string
    industry: string
    employees: string
    location: string
    websiteUrl?: string | null
    Description: string
  }

  export type ReachoutUncheckedCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    companyName: string
    industry: string
    employees: string
    location: string
    websiteUrl?: string | null
    Description: string
  }

  export type ReachoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type ReachoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type ReachoutCreateManyInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    companyName: string
    industry: string
    employees: string
    location: string
    websiteUrl?: string | null
    Description: string
  }

  export type ReachoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type ReachoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyName?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    employees?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemonstrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DemonstrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DemonstrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ReachoutCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    employees?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    Description?: SortOrder
  }

  export type ReachoutMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    employees?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    Description?: SortOrder
  }

  export type ReachoutMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    companyName?: SortOrder
    industry?: SortOrder
    employees?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    Description?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}