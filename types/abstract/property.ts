import { Conditions } from './condition';
import { FormId } from './form';
import { PhysicalQuantity } from './unit';
import { OneOrMany, Primitive } from './utils';
import { ArrayValue, CoupledNumberValue, CoupledValue, NumberValue, PrimitiveValue, RangeValue, SingleValue, Value } from './value';

// Base fields for all property types
interface BaseFields< C extends Primitive = Primitive > {
    form_ref?: FormId[];
    conditions?: Conditions< C >;
}

// Specific property type definitions
export type PrimitiveProperty<
    T extends Primitive = Primitive,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    PrimitiveValue< T >
>;

export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    SingleValue< Q >
>;

export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    ArrayValue< Q >
>;

export type RangeProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    RangeValue< Q >
>;

// Coupled property type definitions
export type CoupledNumberProperty<
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    CoupledNumberValue
>;

export type CoupledProperty<
    T extends Primitive = Primitive,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    CoupledValue< T >
>;

// Union property types
export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    NumberValue< Q >
>;

export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    C extends Primitive = Primitive
> = OneOrMany<
    BaseFields< C > &
    Value< Q, T >
>;
