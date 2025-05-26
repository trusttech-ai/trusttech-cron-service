
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
 * Model trusttech_messages_log
 * 
 */
export type trusttech_messages_log = $Result.DefaultSelection<Prisma.$trusttech_messages_logPayload>
/**
 * Model trusttech_rewind_cron
 * 
 */
export type trusttech_rewind_cron = $Result.DefaultSelection<Prisma.$trusttech_rewind_cronPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trusttech_messages_logs
 * const trusttech_messages_logs = await prisma.trusttech_messages_log.findMany()
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
   * // Fetch zero or more Trusttech_messages_logs
   * const trusttech_messages_logs = await prisma.trusttech_messages_log.findMany()
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
   * `prisma.trusttech_messages_log`: Exposes CRUD operations for the **trusttech_messages_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trusttech_messages_logs
    * const trusttech_messages_logs = await prisma.trusttech_messages_log.findMany()
    * ```
    */
  get trusttech_messages_log(): Prisma.trusttech_messages_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trusttech_rewind_cron`: Exposes CRUD operations for the **trusttech_rewind_cron** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trusttech_rewind_crons
    * const trusttech_rewind_crons = await prisma.trusttech_rewind_cron.findMany()
    * ```
    */
  get trusttech_rewind_cron(): Prisma.trusttech_rewind_cronDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    trusttech_messages_log: 'trusttech_messages_log',
    trusttech_rewind_cron: 'trusttech_rewind_cron'
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
      modelProps: "trusttech_messages_log" | "trusttech_rewind_cron"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      trusttech_messages_log: {
        payload: Prisma.$trusttech_messages_logPayload<ExtArgs>
        fields: Prisma.trusttech_messages_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trusttech_messages_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trusttech_messages_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          findFirst: {
            args: Prisma.trusttech_messages_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trusttech_messages_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          findMany: {
            args: Prisma.trusttech_messages_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>[]
          }
          create: {
            args: Prisma.trusttech_messages_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          createMany: {
            args: Prisma.trusttech_messages_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trusttech_messages_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>[]
          }
          delete: {
            args: Prisma.trusttech_messages_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          update: {
            args: Prisma.trusttech_messages_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          deleteMany: {
            args: Prisma.trusttech_messages_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trusttech_messages_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.trusttech_messages_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>[]
          }
          upsert: {
            args: Prisma.trusttech_messages_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_messages_logPayload>
          }
          aggregate: {
            args: Prisma.Trusttech_messages_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrusttech_messages_log>
          }
          groupBy: {
            args: Prisma.trusttech_messages_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trusttech_messages_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.trusttech_messages_logCountArgs<ExtArgs>
            result: $Utils.Optional<Trusttech_messages_logCountAggregateOutputType> | number
          }
        }
      }
      trusttech_rewind_cron: {
        payload: Prisma.$trusttech_rewind_cronPayload<ExtArgs>
        fields: Prisma.trusttech_rewind_cronFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trusttech_rewind_cronFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trusttech_rewind_cronFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          findFirst: {
            args: Prisma.trusttech_rewind_cronFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trusttech_rewind_cronFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          findMany: {
            args: Prisma.trusttech_rewind_cronFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>[]
          }
          create: {
            args: Prisma.trusttech_rewind_cronCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          createMany: {
            args: Prisma.trusttech_rewind_cronCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trusttech_rewind_cronCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>[]
          }
          delete: {
            args: Prisma.trusttech_rewind_cronDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          update: {
            args: Prisma.trusttech_rewind_cronUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          deleteMany: {
            args: Prisma.trusttech_rewind_cronDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.trusttech_rewind_cronUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.trusttech_rewind_cronUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>[]
          }
          upsert: {
            args: Prisma.trusttech_rewind_cronUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$trusttech_rewind_cronPayload>
          }
          aggregate: {
            args: Prisma.Trusttech_rewind_cronAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrusttech_rewind_cron>
          }
          groupBy: {
            args: Prisma.trusttech_rewind_cronGroupByArgs<ExtArgs>
            result: $Utils.Optional<Trusttech_rewind_cronGroupByOutputType>[]
          }
          count: {
            args: Prisma.trusttech_rewind_cronCountArgs<ExtArgs>
            result: $Utils.Optional<Trusttech_rewind_cronCountAggregateOutputType> | number
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
    trusttech_messages_log?: trusttech_messages_logOmit
    trusttech_rewind_cron?: trusttech_rewind_cronOmit
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
   * Model trusttech_messages_log
   */

  export type AggregateTrusttech_messages_log = {
    _count: Trusttech_messages_logCountAggregateOutputType | null
    _min: Trusttech_messages_logMinAggregateOutputType | null
    _max: Trusttech_messages_logMaxAggregateOutputType | null
  }

  export type Trusttech_messages_logMinAggregateOutputType = {
    id: string | null
    user_number: string | null
    user_name: string | null
    user_message: string | null
    bot_response: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Trusttech_messages_logMaxAggregateOutputType = {
    id: string | null
    user_number: string | null
    user_name: string | null
    user_message: string | null
    bot_response: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Trusttech_messages_logCountAggregateOutputType = {
    id: number
    user_number: number
    user_name: number
    user_message: number
    bot_response: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Trusttech_messages_logMinAggregateInputType = {
    id?: true
    user_number?: true
    user_name?: true
    user_message?: true
    bot_response?: true
    created_at?: true
    updated_at?: true
  }

  export type Trusttech_messages_logMaxAggregateInputType = {
    id?: true
    user_number?: true
    user_name?: true
    user_message?: true
    bot_response?: true
    created_at?: true
    updated_at?: true
  }

  export type Trusttech_messages_logCountAggregateInputType = {
    id?: true
    user_number?: true
    user_name?: true
    user_message?: true
    bot_response?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Trusttech_messages_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trusttech_messages_log to aggregate.
     */
    where?: trusttech_messages_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_messages_logs to fetch.
     */
    orderBy?: trusttech_messages_logOrderByWithRelationInput | trusttech_messages_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trusttech_messages_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_messages_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_messages_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trusttech_messages_logs
    **/
    _count?: true | Trusttech_messages_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trusttech_messages_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trusttech_messages_logMaxAggregateInputType
  }

  export type GetTrusttech_messages_logAggregateType<T extends Trusttech_messages_logAggregateArgs> = {
        [P in keyof T & keyof AggregateTrusttech_messages_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrusttech_messages_log[P]>
      : GetScalarType<T[P], AggregateTrusttech_messages_log[P]>
  }




  export type trusttech_messages_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trusttech_messages_logWhereInput
    orderBy?: trusttech_messages_logOrderByWithAggregationInput | trusttech_messages_logOrderByWithAggregationInput[]
    by: Trusttech_messages_logScalarFieldEnum[] | Trusttech_messages_logScalarFieldEnum
    having?: trusttech_messages_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trusttech_messages_logCountAggregateInputType | true
    _min?: Trusttech_messages_logMinAggregateInputType
    _max?: Trusttech_messages_logMaxAggregateInputType
  }

  export type Trusttech_messages_logGroupByOutputType = {
    id: string
    user_number: string | null
    user_name: string | null
    user_message: string | null
    bot_response: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Trusttech_messages_logCountAggregateOutputType | null
    _min: Trusttech_messages_logMinAggregateOutputType | null
    _max: Trusttech_messages_logMaxAggregateOutputType | null
  }

  type GetTrusttech_messages_logGroupByPayload<T extends trusttech_messages_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trusttech_messages_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trusttech_messages_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trusttech_messages_logGroupByOutputType[P]>
            : GetScalarType<T[P], Trusttech_messages_logGroupByOutputType[P]>
        }
      >
    >


  export type trusttech_messages_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    user_name?: boolean
    user_message?: boolean
    bot_response?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_messages_log"]>

  export type trusttech_messages_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    user_name?: boolean
    user_message?: boolean
    bot_response?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_messages_log"]>

  export type trusttech_messages_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    user_name?: boolean
    user_message?: boolean
    bot_response?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_messages_log"]>

  export type trusttech_messages_logSelectScalar = {
    id?: boolean
    user_number?: boolean
    user_name?: boolean
    user_message?: boolean
    bot_response?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type trusttech_messages_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_number" | "user_name" | "user_message" | "bot_response" | "created_at" | "updated_at", ExtArgs["result"]["trusttech_messages_log"]>

  export type $trusttech_messages_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trusttech_messages_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_number: string | null
      user_name: string | null
      user_message: string | null
      bot_response: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["trusttech_messages_log"]>
    composites: {}
  }

  type trusttech_messages_logGetPayload<S extends boolean | null | undefined | trusttech_messages_logDefaultArgs> = $Result.GetResult<Prisma.$trusttech_messages_logPayload, S>

  type trusttech_messages_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trusttech_messages_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trusttech_messages_logCountAggregateInputType | true
    }

  export interface trusttech_messages_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trusttech_messages_log'], meta: { name: 'trusttech_messages_log' } }
    /**
     * Find zero or one Trusttech_messages_log that matches the filter.
     * @param {trusttech_messages_logFindUniqueArgs} args - Arguments to find a Trusttech_messages_log
     * @example
     * // Get one Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trusttech_messages_logFindUniqueArgs>(args: SelectSubset<T, trusttech_messages_logFindUniqueArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trusttech_messages_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trusttech_messages_logFindUniqueOrThrowArgs} args - Arguments to find a Trusttech_messages_log
     * @example
     * // Get one Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trusttech_messages_logFindUniqueOrThrowArgs>(args: SelectSubset<T, trusttech_messages_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trusttech_messages_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logFindFirstArgs} args - Arguments to find a Trusttech_messages_log
     * @example
     * // Get one Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trusttech_messages_logFindFirstArgs>(args?: SelectSubset<T, trusttech_messages_logFindFirstArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trusttech_messages_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logFindFirstOrThrowArgs} args - Arguments to find a Trusttech_messages_log
     * @example
     * // Get one Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trusttech_messages_logFindFirstOrThrowArgs>(args?: SelectSubset<T, trusttech_messages_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trusttech_messages_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trusttech_messages_logs
     * const trusttech_messages_logs = await prisma.trusttech_messages_log.findMany()
     * 
     * // Get first 10 Trusttech_messages_logs
     * const trusttech_messages_logs = await prisma.trusttech_messages_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trusttech_messages_logWithIdOnly = await prisma.trusttech_messages_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trusttech_messages_logFindManyArgs>(args?: SelectSubset<T, trusttech_messages_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trusttech_messages_log.
     * @param {trusttech_messages_logCreateArgs} args - Arguments to create a Trusttech_messages_log.
     * @example
     * // Create one Trusttech_messages_log
     * const Trusttech_messages_log = await prisma.trusttech_messages_log.create({
     *   data: {
     *     // ... data to create a Trusttech_messages_log
     *   }
     * })
     * 
     */
    create<T extends trusttech_messages_logCreateArgs>(args: SelectSubset<T, trusttech_messages_logCreateArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trusttech_messages_logs.
     * @param {trusttech_messages_logCreateManyArgs} args - Arguments to create many Trusttech_messages_logs.
     * @example
     * // Create many Trusttech_messages_logs
     * const trusttech_messages_log = await prisma.trusttech_messages_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trusttech_messages_logCreateManyArgs>(args?: SelectSubset<T, trusttech_messages_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trusttech_messages_logs and returns the data saved in the database.
     * @param {trusttech_messages_logCreateManyAndReturnArgs} args - Arguments to create many Trusttech_messages_logs.
     * @example
     * // Create many Trusttech_messages_logs
     * const trusttech_messages_log = await prisma.trusttech_messages_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trusttech_messages_logs and only return the `id`
     * const trusttech_messages_logWithIdOnly = await prisma.trusttech_messages_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trusttech_messages_logCreateManyAndReturnArgs>(args?: SelectSubset<T, trusttech_messages_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trusttech_messages_log.
     * @param {trusttech_messages_logDeleteArgs} args - Arguments to delete one Trusttech_messages_log.
     * @example
     * // Delete one Trusttech_messages_log
     * const Trusttech_messages_log = await prisma.trusttech_messages_log.delete({
     *   where: {
     *     // ... filter to delete one Trusttech_messages_log
     *   }
     * })
     * 
     */
    delete<T extends trusttech_messages_logDeleteArgs>(args: SelectSubset<T, trusttech_messages_logDeleteArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trusttech_messages_log.
     * @param {trusttech_messages_logUpdateArgs} args - Arguments to update one Trusttech_messages_log.
     * @example
     * // Update one Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trusttech_messages_logUpdateArgs>(args: SelectSubset<T, trusttech_messages_logUpdateArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trusttech_messages_logs.
     * @param {trusttech_messages_logDeleteManyArgs} args - Arguments to filter Trusttech_messages_logs to delete.
     * @example
     * // Delete a few Trusttech_messages_logs
     * const { count } = await prisma.trusttech_messages_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trusttech_messages_logDeleteManyArgs>(args?: SelectSubset<T, trusttech_messages_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trusttech_messages_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trusttech_messages_logs
     * const trusttech_messages_log = await prisma.trusttech_messages_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trusttech_messages_logUpdateManyArgs>(args: SelectSubset<T, trusttech_messages_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trusttech_messages_logs and returns the data updated in the database.
     * @param {trusttech_messages_logUpdateManyAndReturnArgs} args - Arguments to update many Trusttech_messages_logs.
     * @example
     * // Update many Trusttech_messages_logs
     * const trusttech_messages_log = await prisma.trusttech_messages_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trusttech_messages_logs and only return the `id`
     * const trusttech_messages_logWithIdOnly = await prisma.trusttech_messages_log.updateManyAndReturn({
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
    updateManyAndReturn<T extends trusttech_messages_logUpdateManyAndReturnArgs>(args: SelectSubset<T, trusttech_messages_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trusttech_messages_log.
     * @param {trusttech_messages_logUpsertArgs} args - Arguments to update or create a Trusttech_messages_log.
     * @example
     * // Update or create a Trusttech_messages_log
     * const trusttech_messages_log = await prisma.trusttech_messages_log.upsert({
     *   create: {
     *     // ... data to create a Trusttech_messages_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trusttech_messages_log we want to update
     *   }
     * })
     */
    upsert<T extends trusttech_messages_logUpsertArgs>(args: SelectSubset<T, trusttech_messages_logUpsertArgs<ExtArgs>>): Prisma__trusttech_messages_logClient<$Result.GetResult<Prisma.$trusttech_messages_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trusttech_messages_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logCountArgs} args - Arguments to filter Trusttech_messages_logs to count.
     * @example
     * // Count the number of Trusttech_messages_logs
     * const count = await prisma.trusttech_messages_log.count({
     *   where: {
     *     // ... the filter for the Trusttech_messages_logs we want to count
     *   }
     * })
    **/
    count<T extends trusttech_messages_logCountArgs>(
      args?: Subset<T, trusttech_messages_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trusttech_messages_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trusttech_messages_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trusttech_messages_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trusttech_messages_logAggregateArgs>(args: Subset<T, Trusttech_messages_logAggregateArgs>): Prisma.PrismaPromise<GetTrusttech_messages_logAggregateType<T>>

    /**
     * Group by Trusttech_messages_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_messages_logGroupByArgs} args - Group by arguments.
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
      T extends trusttech_messages_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trusttech_messages_logGroupByArgs['orderBy'] }
        : { orderBy?: trusttech_messages_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trusttech_messages_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrusttech_messages_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trusttech_messages_log model
   */
  readonly fields: trusttech_messages_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trusttech_messages_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trusttech_messages_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the trusttech_messages_log model
   */
  interface trusttech_messages_logFieldRefs {
    readonly id: FieldRef<"trusttech_messages_log", 'String'>
    readonly user_number: FieldRef<"trusttech_messages_log", 'String'>
    readonly user_name: FieldRef<"trusttech_messages_log", 'String'>
    readonly user_message: FieldRef<"trusttech_messages_log", 'String'>
    readonly bot_response: FieldRef<"trusttech_messages_log", 'String'>
    readonly created_at: FieldRef<"trusttech_messages_log", 'DateTime'>
    readonly updated_at: FieldRef<"trusttech_messages_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * trusttech_messages_log findUnique
   */
  export type trusttech_messages_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_messages_log to fetch.
     */
    where: trusttech_messages_logWhereUniqueInput
  }

  /**
   * trusttech_messages_log findUniqueOrThrow
   */
  export type trusttech_messages_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_messages_log to fetch.
     */
    where: trusttech_messages_logWhereUniqueInput
  }

  /**
   * trusttech_messages_log findFirst
   */
  export type trusttech_messages_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_messages_log to fetch.
     */
    where?: trusttech_messages_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_messages_logs to fetch.
     */
    orderBy?: trusttech_messages_logOrderByWithRelationInput | trusttech_messages_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trusttech_messages_logs.
     */
    cursor?: trusttech_messages_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_messages_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_messages_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trusttech_messages_logs.
     */
    distinct?: Trusttech_messages_logScalarFieldEnum | Trusttech_messages_logScalarFieldEnum[]
  }

  /**
   * trusttech_messages_log findFirstOrThrow
   */
  export type trusttech_messages_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_messages_log to fetch.
     */
    where?: trusttech_messages_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_messages_logs to fetch.
     */
    orderBy?: trusttech_messages_logOrderByWithRelationInput | trusttech_messages_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trusttech_messages_logs.
     */
    cursor?: trusttech_messages_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_messages_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_messages_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trusttech_messages_logs.
     */
    distinct?: Trusttech_messages_logScalarFieldEnum | Trusttech_messages_logScalarFieldEnum[]
  }

  /**
   * trusttech_messages_log findMany
   */
  export type trusttech_messages_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_messages_logs to fetch.
     */
    where?: trusttech_messages_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_messages_logs to fetch.
     */
    orderBy?: trusttech_messages_logOrderByWithRelationInput | trusttech_messages_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trusttech_messages_logs.
     */
    cursor?: trusttech_messages_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_messages_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_messages_logs.
     */
    skip?: number
    distinct?: Trusttech_messages_logScalarFieldEnum | Trusttech_messages_logScalarFieldEnum[]
  }

  /**
   * trusttech_messages_log create
   */
  export type trusttech_messages_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * The data needed to create a trusttech_messages_log.
     */
    data?: XOR<trusttech_messages_logCreateInput, trusttech_messages_logUncheckedCreateInput>
  }

  /**
   * trusttech_messages_log createMany
   */
  export type trusttech_messages_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trusttech_messages_logs.
     */
    data: trusttech_messages_logCreateManyInput | trusttech_messages_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trusttech_messages_log createManyAndReturn
   */
  export type trusttech_messages_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * The data used to create many trusttech_messages_logs.
     */
    data: trusttech_messages_logCreateManyInput | trusttech_messages_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trusttech_messages_log update
   */
  export type trusttech_messages_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * The data needed to update a trusttech_messages_log.
     */
    data: XOR<trusttech_messages_logUpdateInput, trusttech_messages_logUncheckedUpdateInput>
    /**
     * Choose, which trusttech_messages_log to update.
     */
    where: trusttech_messages_logWhereUniqueInput
  }

  /**
   * trusttech_messages_log updateMany
   */
  export type trusttech_messages_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trusttech_messages_logs.
     */
    data: XOR<trusttech_messages_logUpdateManyMutationInput, trusttech_messages_logUncheckedUpdateManyInput>
    /**
     * Filter which trusttech_messages_logs to update
     */
    where?: trusttech_messages_logWhereInput
    /**
     * Limit how many trusttech_messages_logs to update.
     */
    limit?: number
  }

  /**
   * trusttech_messages_log updateManyAndReturn
   */
  export type trusttech_messages_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * The data used to update trusttech_messages_logs.
     */
    data: XOR<trusttech_messages_logUpdateManyMutationInput, trusttech_messages_logUncheckedUpdateManyInput>
    /**
     * Filter which trusttech_messages_logs to update
     */
    where?: trusttech_messages_logWhereInput
    /**
     * Limit how many trusttech_messages_logs to update.
     */
    limit?: number
  }

  /**
   * trusttech_messages_log upsert
   */
  export type trusttech_messages_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * The filter to search for the trusttech_messages_log to update in case it exists.
     */
    where: trusttech_messages_logWhereUniqueInput
    /**
     * In case the trusttech_messages_log found by the `where` argument doesn't exist, create a new trusttech_messages_log with this data.
     */
    create: XOR<trusttech_messages_logCreateInput, trusttech_messages_logUncheckedCreateInput>
    /**
     * In case the trusttech_messages_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trusttech_messages_logUpdateInput, trusttech_messages_logUncheckedUpdateInput>
  }

  /**
   * trusttech_messages_log delete
   */
  export type trusttech_messages_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
    /**
     * Filter which trusttech_messages_log to delete.
     */
    where: trusttech_messages_logWhereUniqueInput
  }

  /**
   * trusttech_messages_log deleteMany
   */
  export type trusttech_messages_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trusttech_messages_logs to delete
     */
    where?: trusttech_messages_logWhereInput
    /**
     * Limit how many trusttech_messages_logs to delete.
     */
    limit?: number
  }

  /**
   * trusttech_messages_log without action
   */
  export type trusttech_messages_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_messages_log
     */
    select?: trusttech_messages_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_messages_log
     */
    omit?: trusttech_messages_logOmit<ExtArgs> | null
  }


  /**
   * Model trusttech_rewind_cron
   */

  export type AggregateTrusttech_rewind_cron = {
    _count: Trusttech_rewind_cronCountAggregateOutputType | null
    _min: Trusttech_rewind_cronMinAggregateOutputType | null
    _max: Trusttech_rewind_cronMaxAggregateOutputType | null
  }

  export type Trusttech_rewind_cronMinAggregateOutputType = {
    id: string | null
    user_number: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Trusttech_rewind_cronMaxAggregateOutputType = {
    id: string | null
    user_number: string | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Trusttech_rewind_cronCountAggregateOutputType = {
    id: number
    user_number: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Trusttech_rewind_cronMinAggregateInputType = {
    id?: true
    user_number?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Trusttech_rewind_cronMaxAggregateInputType = {
    id?: true
    user_number?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Trusttech_rewind_cronCountAggregateInputType = {
    id?: true
    user_number?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Trusttech_rewind_cronAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trusttech_rewind_cron to aggregate.
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_rewind_crons to fetch.
     */
    orderBy?: trusttech_rewind_cronOrderByWithRelationInput | trusttech_rewind_cronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trusttech_rewind_cronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_rewind_crons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_rewind_crons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trusttech_rewind_crons
    **/
    _count?: true | Trusttech_rewind_cronCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Trusttech_rewind_cronMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Trusttech_rewind_cronMaxAggregateInputType
  }

  export type GetTrusttech_rewind_cronAggregateType<T extends Trusttech_rewind_cronAggregateArgs> = {
        [P in keyof T & keyof AggregateTrusttech_rewind_cron]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrusttech_rewind_cron[P]>
      : GetScalarType<T[P], AggregateTrusttech_rewind_cron[P]>
  }




  export type trusttech_rewind_cronGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trusttech_rewind_cronWhereInput
    orderBy?: trusttech_rewind_cronOrderByWithAggregationInput | trusttech_rewind_cronOrderByWithAggregationInput[]
    by: Trusttech_rewind_cronScalarFieldEnum[] | Trusttech_rewind_cronScalarFieldEnum
    having?: trusttech_rewind_cronScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Trusttech_rewind_cronCountAggregateInputType | true
    _min?: Trusttech_rewind_cronMinAggregateInputType
    _max?: Trusttech_rewind_cronMaxAggregateInputType
  }

  export type Trusttech_rewind_cronGroupByOutputType = {
    id: string
    user_number: string
    active: boolean
    created_at: Date
    updated_at: Date
    _count: Trusttech_rewind_cronCountAggregateOutputType | null
    _min: Trusttech_rewind_cronMinAggregateOutputType | null
    _max: Trusttech_rewind_cronMaxAggregateOutputType | null
  }

  type GetTrusttech_rewind_cronGroupByPayload<T extends trusttech_rewind_cronGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Trusttech_rewind_cronGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Trusttech_rewind_cronGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Trusttech_rewind_cronGroupByOutputType[P]>
            : GetScalarType<T[P], Trusttech_rewind_cronGroupByOutputType[P]>
        }
      >
    >


  export type trusttech_rewind_cronSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_rewind_cron"]>

  export type trusttech_rewind_cronSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_rewind_cron"]>

  export type trusttech_rewind_cronSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_number?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["trusttech_rewind_cron"]>

  export type trusttech_rewind_cronSelectScalar = {
    id?: boolean
    user_number?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type trusttech_rewind_cronOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_number" | "active" | "created_at" | "updated_at", ExtArgs["result"]["trusttech_rewind_cron"]>

  export type $trusttech_rewind_cronPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trusttech_rewind_cron"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_number: string
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["trusttech_rewind_cron"]>
    composites: {}
  }

  type trusttech_rewind_cronGetPayload<S extends boolean | null | undefined | trusttech_rewind_cronDefaultArgs> = $Result.GetResult<Prisma.$trusttech_rewind_cronPayload, S>

  type trusttech_rewind_cronCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<trusttech_rewind_cronFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Trusttech_rewind_cronCountAggregateInputType | true
    }

  export interface trusttech_rewind_cronDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trusttech_rewind_cron'], meta: { name: 'trusttech_rewind_cron' } }
    /**
     * Find zero or one Trusttech_rewind_cron that matches the filter.
     * @param {trusttech_rewind_cronFindUniqueArgs} args - Arguments to find a Trusttech_rewind_cron
     * @example
     * // Get one Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trusttech_rewind_cronFindUniqueArgs>(args: SelectSubset<T, trusttech_rewind_cronFindUniqueArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trusttech_rewind_cron that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trusttech_rewind_cronFindUniqueOrThrowArgs} args - Arguments to find a Trusttech_rewind_cron
     * @example
     * // Get one Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trusttech_rewind_cronFindUniqueOrThrowArgs>(args: SelectSubset<T, trusttech_rewind_cronFindUniqueOrThrowArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trusttech_rewind_cron that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronFindFirstArgs} args - Arguments to find a Trusttech_rewind_cron
     * @example
     * // Get one Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trusttech_rewind_cronFindFirstArgs>(args?: SelectSubset<T, trusttech_rewind_cronFindFirstArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trusttech_rewind_cron that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronFindFirstOrThrowArgs} args - Arguments to find a Trusttech_rewind_cron
     * @example
     * // Get one Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trusttech_rewind_cronFindFirstOrThrowArgs>(args?: SelectSubset<T, trusttech_rewind_cronFindFirstOrThrowArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trusttech_rewind_crons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trusttech_rewind_crons
     * const trusttech_rewind_crons = await prisma.trusttech_rewind_cron.findMany()
     * 
     * // Get first 10 Trusttech_rewind_crons
     * const trusttech_rewind_crons = await prisma.trusttech_rewind_cron.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trusttech_rewind_cronWithIdOnly = await prisma.trusttech_rewind_cron.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends trusttech_rewind_cronFindManyArgs>(args?: SelectSubset<T, trusttech_rewind_cronFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trusttech_rewind_cron.
     * @param {trusttech_rewind_cronCreateArgs} args - Arguments to create a Trusttech_rewind_cron.
     * @example
     * // Create one Trusttech_rewind_cron
     * const Trusttech_rewind_cron = await prisma.trusttech_rewind_cron.create({
     *   data: {
     *     // ... data to create a Trusttech_rewind_cron
     *   }
     * })
     * 
     */
    create<T extends trusttech_rewind_cronCreateArgs>(args: SelectSubset<T, trusttech_rewind_cronCreateArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trusttech_rewind_crons.
     * @param {trusttech_rewind_cronCreateManyArgs} args - Arguments to create many Trusttech_rewind_crons.
     * @example
     * // Create many Trusttech_rewind_crons
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends trusttech_rewind_cronCreateManyArgs>(args?: SelectSubset<T, trusttech_rewind_cronCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trusttech_rewind_crons and returns the data saved in the database.
     * @param {trusttech_rewind_cronCreateManyAndReturnArgs} args - Arguments to create many Trusttech_rewind_crons.
     * @example
     * // Create many Trusttech_rewind_crons
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trusttech_rewind_crons and only return the `id`
     * const trusttech_rewind_cronWithIdOnly = await prisma.trusttech_rewind_cron.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends trusttech_rewind_cronCreateManyAndReturnArgs>(args?: SelectSubset<T, trusttech_rewind_cronCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trusttech_rewind_cron.
     * @param {trusttech_rewind_cronDeleteArgs} args - Arguments to delete one Trusttech_rewind_cron.
     * @example
     * // Delete one Trusttech_rewind_cron
     * const Trusttech_rewind_cron = await prisma.trusttech_rewind_cron.delete({
     *   where: {
     *     // ... filter to delete one Trusttech_rewind_cron
     *   }
     * })
     * 
     */
    delete<T extends trusttech_rewind_cronDeleteArgs>(args: SelectSubset<T, trusttech_rewind_cronDeleteArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trusttech_rewind_cron.
     * @param {trusttech_rewind_cronUpdateArgs} args - Arguments to update one Trusttech_rewind_cron.
     * @example
     * // Update one Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends trusttech_rewind_cronUpdateArgs>(args: SelectSubset<T, trusttech_rewind_cronUpdateArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trusttech_rewind_crons.
     * @param {trusttech_rewind_cronDeleteManyArgs} args - Arguments to filter Trusttech_rewind_crons to delete.
     * @example
     * // Delete a few Trusttech_rewind_crons
     * const { count } = await prisma.trusttech_rewind_cron.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends trusttech_rewind_cronDeleteManyArgs>(args?: SelectSubset<T, trusttech_rewind_cronDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trusttech_rewind_crons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trusttech_rewind_crons
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends trusttech_rewind_cronUpdateManyArgs>(args: SelectSubset<T, trusttech_rewind_cronUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trusttech_rewind_crons and returns the data updated in the database.
     * @param {trusttech_rewind_cronUpdateManyAndReturnArgs} args - Arguments to update many Trusttech_rewind_crons.
     * @example
     * // Update many Trusttech_rewind_crons
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trusttech_rewind_crons and only return the `id`
     * const trusttech_rewind_cronWithIdOnly = await prisma.trusttech_rewind_cron.updateManyAndReturn({
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
    updateManyAndReturn<T extends trusttech_rewind_cronUpdateManyAndReturnArgs>(args: SelectSubset<T, trusttech_rewind_cronUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trusttech_rewind_cron.
     * @param {trusttech_rewind_cronUpsertArgs} args - Arguments to update or create a Trusttech_rewind_cron.
     * @example
     * // Update or create a Trusttech_rewind_cron
     * const trusttech_rewind_cron = await prisma.trusttech_rewind_cron.upsert({
     *   create: {
     *     // ... data to create a Trusttech_rewind_cron
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trusttech_rewind_cron we want to update
     *   }
     * })
     */
    upsert<T extends trusttech_rewind_cronUpsertArgs>(args: SelectSubset<T, trusttech_rewind_cronUpsertArgs<ExtArgs>>): Prisma__trusttech_rewind_cronClient<$Result.GetResult<Prisma.$trusttech_rewind_cronPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trusttech_rewind_crons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronCountArgs} args - Arguments to filter Trusttech_rewind_crons to count.
     * @example
     * // Count the number of Trusttech_rewind_crons
     * const count = await prisma.trusttech_rewind_cron.count({
     *   where: {
     *     // ... the filter for the Trusttech_rewind_crons we want to count
     *   }
     * })
    **/
    count<T extends trusttech_rewind_cronCountArgs>(
      args?: Subset<T, trusttech_rewind_cronCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Trusttech_rewind_cronCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trusttech_rewind_cron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Trusttech_rewind_cronAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Trusttech_rewind_cronAggregateArgs>(args: Subset<T, Trusttech_rewind_cronAggregateArgs>): Prisma.PrismaPromise<GetTrusttech_rewind_cronAggregateType<T>>

    /**
     * Group by Trusttech_rewind_cron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trusttech_rewind_cronGroupByArgs} args - Group by arguments.
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
      T extends trusttech_rewind_cronGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trusttech_rewind_cronGroupByArgs['orderBy'] }
        : { orderBy?: trusttech_rewind_cronGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trusttech_rewind_cronGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrusttech_rewind_cronGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trusttech_rewind_cron model
   */
  readonly fields: trusttech_rewind_cronFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trusttech_rewind_cron.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trusttech_rewind_cronClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the trusttech_rewind_cron model
   */
  interface trusttech_rewind_cronFieldRefs {
    readonly id: FieldRef<"trusttech_rewind_cron", 'String'>
    readonly user_number: FieldRef<"trusttech_rewind_cron", 'String'>
    readonly active: FieldRef<"trusttech_rewind_cron", 'Boolean'>
    readonly created_at: FieldRef<"trusttech_rewind_cron", 'DateTime'>
    readonly updated_at: FieldRef<"trusttech_rewind_cron", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * trusttech_rewind_cron findUnique
   */
  export type trusttech_rewind_cronFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_rewind_cron to fetch.
     */
    where: trusttech_rewind_cronWhereUniqueInput
  }

  /**
   * trusttech_rewind_cron findUniqueOrThrow
   */
  export type trusttech_rewind_cronFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_rewind_cron to fetch.
     */
    where: trusttech_rewind_cronWhereUniqueInput
  }

  /**
   * trusttech_rewind_cron findFirst
   */
  export type trusttech_rewind_cronFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_rewind_cron to fetch.
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_rewind_crons to fetch.
     */
    orderBy?: trusttech_rewind_cronOrderByWithRelationInput | trusttech_rewind_cronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trusttech_rewind_crons.
     */
    cursor?: trusttech_rewind_cronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_rewind_crons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_rewind_crons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trusttech_rewind_crons.
     */
    distinct?: Trusttech_rewind_cronScalarFieldEnum | Trusttech_rewind_cronScalarFieldEnum[]
  }

  /**
   * trusttech_rewind_cron findFirstOrThrow
   */
  export type trusttech_rewind_cronFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_rewind_cron to fetch.
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_rewind_crons to fetch.
     */
    orderBy?: trusttech_rewind_cronOrderByWithRelationInput | trusttech_rewind_cronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trusttech_rewind_crons.
     */
    cursor?: trusttech_rewind_cronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_rewind_crons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_rewind_crons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trusttech_rewind_crons.
     */
    distinct?: Trusttech_rewind_cronScalarFieldEnum | Trusttech_rewind_cronScalarFieldEnum[]
  }

  /**
   * trusttech_rewind_cron findMany
   */
  export type trusttech_rewind_cronFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter, which trusttech_rewind_crons to fetch.
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trusttech_rewind_crons to fetch.
     */
    orderBy?: trusttech_rewind_cronOrderByWithRelationInput | trusttech_rewind_cronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trusttech_rewind_crons.
     */
    cursor?: trusttech_rewind_cronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trusttech_rewind_crons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trusttech_rewind_crons.
     */
    skip?: number
    distinct?: Trusttech_rewind_cronScalarFieldEnum | Trusttech_rewind_cronScalarFieldEnum[]
  }

  /**
   * trusttech_rewind_cron create
   */
  export type trusttech_rewind_cronCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * The data needed to create a trusttech_rewind_cron.
     */
    data: XOR<trusttech_rewind_cronCreateInput, trusttech_rewind_cronUncheckedCreateInput>
  }

  /**
   * trusttech_rewind_cron createMany
   */
  export type trusttech_rewind_cronCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trusttech_rewind_crons.
     */
    data: trusttech_rewind_cronCreateManyInput | trusttech_rewind_cronCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trusttech_rewind_cron createManyAndReturn
   */
  export type trusttech_rewind_cronCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * The data used to create many trusttech_rewind_crons.
     */
    data: trusttech_rewind_cronCreateManyInput | trusttech_rewind_cronCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trusttech_rewind_cron update
   */
  export type trusttech_rewind_cronUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * The data needed to update a trusttech_rewind_cron.
     */
    data: XOR<trusttech_rewind_cronUpdateInput, trusttech_rewind_cronUncheckedUpdateInput>
    /**
     * Choose, which trusttech_rewind_cron to update.
     */
    where: trusttech_rewind_cronWhereUniqueInput
  }

  /**
   * trusttech_rewind_cron updateMany
   */
  export type trusttech_rewind_cronUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trusttech_rewind_crons.
     */
    data: XOR<trusttech_rewind_cronUpdateManyMutationInput, trusttech_rewind_cronUncheckedUpdateManyInput>
    /**
     * Filter which trusttech_rewind_crons to update
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * Limit how many trusttech_rewind_crons to update.
     */
    limit?: number
  }

  /**
   * trusttech_rewind_cron updateManyAndReturn
   */
  export type trusttech_rewind_cronUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * The data used to update trusttech_rewind_crons.
     */
    data: XOR<trusttech_rewind_cronUpdateManyMutationInput, trusttech_rewind_cronUncheckedUpdateManyInput>
    /**
     * Filter which trusttech_rewind_crons to update
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * Limit how many trusttech_rewind_crons to update.
     */
    limit?: number
  }

  /**
   * trusttech_rewind_cron upsert
   */
  export type trusttech_rewind_cronUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * The filter to search for the trusttech_rewind_cron to update in case it exists.
     */
    where: trusttech_rewind_cronWhereUniqueInput
    /**
     * In case the trusttech_rewind_cron found by the `where` argument doesn't exist, create a new trusttech_rewind_cron with this data.
     */
    create: XOR<trusttech_rewind_cronCreateInput, trusttech_rewind_cronUncheckedCreateInput>
    /**
     * In case the trusttech_rewind_cron was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trusttech_rewind_cronUpdateInput, trusttech_rewind_cronUncheckedUpdateInput>
  }

  /**
   * trusttech_rewind_cron delete
   */
  export type trusttech_rewind_cronDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
    /**
     * Filter which trusttech_rewind_cron to delete.
     */
    where: trusttech_rewind_cronWhereUniqueInput
  }

  /**
   * trusttech_rewind_cron deleteMany
   */
  export type trusttech_rewind_cronDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trusttech_rewind_crons to delete
     */
    where?: trusttech_rewind_cronWhereInput
    /**
     * Limit how many trusttech_rewind_crons to delete.
     */
    limit?: number
  }

  /**
   * trusttech_rewind_cron without action
   */
  export type trusttech_rewind_cronDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trusttech_rewind_cron
     */
    select?: trusttech_rewind_cronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trusttech_rewind_cron
     */
    omit?: trusttech_rewind_cronOmit<ExtArgs> | null
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


  export const Trusttech_messages_logScalarFieldEnum: {
    id: 'id',
    user_number: 'user_number',
    user_name: 'user_name',
    user_message: 'user_message',
    bot_response: 'bot_response',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Trusttech_messages_logScalarFieldEnum = (typeof Trusttech_messages_logScalarFieldEnum)[keyof typeof Trusttech_messages_logScalarFieldEnum]


  export const Trusttech_rewind_cronScalarFieldEnum: {
    id: 'id',
    user_number: 'user_number',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Trusttech_rewind_cronScalarFieldEnum = (typeof Trusttech_rewind_cronScalarFieldEnum)[keyof typeof Trusttech_rewind_cronScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type trusttech_messages_logWhereInput = {
    AND?: trusttech_messages_logWhereInput | trusttech_messages_logWhereInput[]
    OR?: trusttech_messages_logWhereInput[]
    NOT?: trusttech_messages_logWhereInput | trusttech_messages_logWhereInput[]
    id?: UuidFilter<"trusttech_messages_log"> | string
    user_number?: StringNullableFilter<"trusttech_messages_log"> | string | null
    user_name?: StringNullableFilter<"trusttech_messages_log"> | string | null
    user_message?: StringNullableFilter<"trusttech_messages_log"> | string | null
    bot_response?: StringNullableFilter<"trusttech_messages_log"> | string | null
    created_at?: DateTimeNullableFilter<"trusttech_messages_log"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"trusttech_messages_log"> | Date | string | null
  }

  export type trusttech_messages_logOrderByWithRelationInput = {
    id?: SortOrder
    user_number?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    user_message?: SortOrderInput | SortOrder
    bot_response?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type trusttech_messages_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: trusttech_messages_logWhereInput | trusttech_messages_logWhereInput[]
    OR?: trusttech_messages_logWhereInput[]
    NOT?: trusttech_messages_logWhereInput | trusttech_messages_logWhereInput[]
    user_number?: StringNullableFilter<"trusttech_messages_log"> | string | null
    user_name?: StringNullableFilter<"trusttech_messages_log"> | string | null
    user_message?: StringNullableFilter<"trusttech_messages_log"> | string | null
    bot_response?: StringNullableFilter<"trusttech_messages_log"> | string | null
    created_at?: DateTimeNullableFilter<"trusttech_messages_log"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"trusttech_messages_log"> | Date | string | null
  }, "id">

  export type trusttech_messages_logOrderByWithAggregationInput = {
    id?: SortOrder
    user_number?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    user_message?: SortOrderInput | SortOrder
    bot_response?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: trusttech_messages_logCountOrderByAggregateInput
    _max?: trusttech_messages_logMaxOrderByAggregateInput
    _min?: trusttech_messages_logMinOrderByAggregateInput
  }

  export type trusttech_messages_logScalarWhereWithAggregatesInput = {
    AND?: trusttech_messages_logScalarWhereWithAggregatesInput | trusttech_messages_logScalarWhereWithAggregatesInput[]
    OR?: trusttech_messages_logScalarWhereWithAggregatesInput[]
    NOT?: trusttech_messages_logScalarWhereWithAggregatesInput | trusttech_messages_logScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"trusttech_messages_log"> | string
    user_number?: StringNullableWithAggregatesFilter<"trusttech_messages_log"> | string | null
    user_name?: StringNullableWithAggregatesFilter<"trusttech_messages_log"> | string | null
    user_message?: StringNullableWithAggregatesFilter<"trusttech_messages_log"> | string | null
    bot_response?: StringNullableWithAggregatesFilter<"trusttech_messages_log"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"trusttech_messages_log"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"trusttech_messages_log"> | Date | string | null
  }

  export type trusttech_rewind_cronWhereInput = {
    AND?: trusttech_rewind_cronWhereInput | trusttech_rewind_cronWhereInput[]
    OR?: trusttech_rewind_cronWhereInput[]
    NOT?: trusttech_rewind_cronWhereInput | trusttech_rewind_cronWhereInput[]
    id?: UuidFilter<"trusttech_rewind_cron"> | string
    user_number?: StringFilter<"trusttech_rewind_cron"> | string
    active?: BoolFilter<"trusttech_rewind_cron"> | boolean
    created_at?: DateTimeFilter<"trusttech_rewind_cron"> | Date | string
    updated_at?: DateTimeFilter<"trusttech_rewind_cron"> | Date | string
  }

  export type trusttech_rewind_cronOrderByWithRelationInput = {
    id?: SortOrder
    user_number?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type trusttech_rewind_cronWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: trusttech_rewind_cronWhereInput | trusttech_rewind_cronWhereInput[]
    OR?: trusttech_rewind_cronWhereInput[]
    NOT?: trusttech_rewind_cronWhereInput | trusttech_rewind_cronWhereInput[]
    user_number?: StringFilter<"trusttech_rewind_cron"> | string
    active?: BoolFilter<"trusttech_rewind_cron"> | boolean
    created_at?: DateTimeFilter<"trusttech_rewind_cron"> | Date | string
    updated_at?: DateTimeFilter<"trusttech_rewind_cron"> | Date | string
  }, "id">

  export type trusttech_rewind_cronOrderByWithAggregationInput = {
    id?: SortOrder
    user_number?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: trusttech_rewind_cronCountOrderByAggregateInput
    _max?: trusttech_rewind_cronMaxOrderByAggregateInput
    _min?: trusttech_rewind_cronMinOrderByAggregateInput
  }

  export type trusttech_rewind_cronScalarWhereWithAggregatesInput = {
    AND?: trusttech_rewind_cronScalarWhereWithAggregatesInput | trusttech_rewind_cronScalarWhereWithAggregatesInput[]
    OR?: trusttech_rewind_cronScalarWhereWithAggregatesInput[]
    NOT?: trusttech_rewind_cronScalarWhereWithAggregatesInput | trusttech_rewind_cronScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"trusttech_rewind_cron"> | string
    user_number?: StringWithAggregatesFilter<"trusttech_rewind_cron"> | string
    active?: BoolWithAggregatesFilter<"trusttech_rewind_cron"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"trusttech_rewind_cron"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"trusttech_rewind_cron"> | Date | string
  }

  export type trusttech_messages_logCreateInput = {
    id?: string
    user_number?: string | null
    user_name?: string | null
    user_message?: string | null
    bot_response?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type trusttech_messages_logUncheckedCreateInput = {
    id?: string
    user_number?: string | null
    user_name?: string | null
    user_message?: string | null
    bot_response?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type trusttech_messages_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    bot_response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trusttech_messages_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    bot_response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trusttech_messages_logCreateManyInput = {
    id?: string
    user_number?: string | null
    user_name?: string | null
    user_message?: string | null
    bot_response?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type trusttech_messages_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    bot_response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trusttech_messages_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_message?: NullableStringFieldUpdateOperationsInput | string | null
    bot_response?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type trusttech_rewind_cronCreateInput = {
    id?: string
    user_number: string
    active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type trusttech_rewind_cronUncheckedCreateInput = {
    id?: string
    user_number: string
    active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type trusttech_rewind_cronUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trusttech_rewind_cronUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trusttech_rewind_cronCreateManyInput = {
    id?: string
    user_number: string
    active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type trusttech_rewind_cronUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trusttech_rewind_cronUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_number?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type trusttech_messages_logCountOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    user_name?: SortOrder
    user_message?: SortOrder
    bot_response?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type trusttech_messages_logMaxOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    user_name?: SortOrder
    user_message?: SortOrder
    bot_response?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type trusttech_messages_logMinOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    user_name?: SortOrder
    user_message?: SortOrder
    bot_response?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type trusttech_rewind_cronCountOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type trusttech_rewind_cronMaxOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type trusttech_rewind_cronMinOrderByAggregateInput = {
    id?: SortOrder
    user_number?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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