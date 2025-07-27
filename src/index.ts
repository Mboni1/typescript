// Example interface we'll work with
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}

// 1. Partial - Make all properties optional
type PartialUser = Partial<User>;
/* Equivalent to:
{
  id?: number;
  name?: string;
  email?: string;
  age?: number;
  createdAt?: Date;
}
*/

// 2. Required - Make all properties required
type CompleteUser = Required<User>;
/* Now age is required:
{
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}
*/

// 3. Readonly - Make all properties readonly
type ImmutableUser = Readonly<User>;
/* 
{
  readonly id: number;
  readonly name: string;
  // ... etc
}
*/

// 4. Pick - Select specific properties
type UserIdentity = Pick<User, 'id' | 'name'>;
/* { id: number; name: string } */

// 5. Omit - Remove specific properties
type UserWithoutDates = Omit<User, 'createdAt'>;
/* { id: number; name: string; email: string; age?: number } */

// 6. Record - Create mapped type
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
/* { [key: string]: 'admin' | 'user' | 'guest' } */