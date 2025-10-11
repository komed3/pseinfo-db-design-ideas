/**
 * Einheiten-Definitionen für physikalische und chemische Eigenschaften
 */

import {} from './abstract';

interface BaseDimension {
    name: string;
    dimension: string;
    symbol: string;
}

export interface TimeDimension extends BaseDimension {
    name: 'time',
    dimension: 'T';
    symbol: 't';
}

export interface LengthDimension extends BaseDimension {
    name: 'length',
    dimension: 'L';
    symbol: 'l';
}

export interface MassDimension extends BaseDimension {
    name: 'mass',
    dimension: 'M';
    symbol: 'm';
}

export interface ElectricCurrentDimension extends BaseDimension {
    name: 'electricCurrent',
    dimension: 'I';
    symbol: 'I';
}

export interface TemperatureDimension extends BaseDimension {
    name: 'temperature',
    dimension: 'Θ';
    symbol: 'T';
}

export interface AmountOfSubstanceDimension extends BaseDimension {
    name: 'amountOfSubstance',
    dimension: 'N';
    symbol: 'n';
}

export interface LuminousIntensityDimension extends BaseDimension {
    name: 'luminousIntensity',
    dimension: 'J';
    symbol: 'I{v}';
}

export interface AreaDimension extends BaseDimension {
    name: 'area',
    dimension: 'L[2]';
    symbol: 'A';
}

export interface VolumeDimension extends BaseDimension {
    name: 'volume',
    dimension: 'L[3]';
    symbol: 'V';
}

export interface VelocityDimension extends BaseDimension {
    name: 'velocity',
    dimension: 'L·T[-1]';
    symbol: 'v';
}

export interface AccelerationDimension extends BaseDimension {
    name: 'acceleration',
    dimension: 'L·T[-2]';
    symbol: 'a';
}

export interface ForceDimension extends BaseDimension {
    name: 'force',
    dimension: 'M·L·T[-2]';
    symbol: 'F';
}

export interface EnergyDimension extends BaseDimension {
    name: 'energy',
    dimension: 'L[2]·M·T[-2]';
    symbol: 'E';
}

export interface PowerDimension extends BaseDimension {
    name: 'power',
    dimension: 'M·L[2]·T[-3]';
    symbol: 'P';
}

export interface PressureDimension extends BaseDimension {
    name: 'pressure',
    dimension: 'M·L[-1]·T[-2]';
    symbol: 'p';
}

export interface EnthalpyDimension extends BaseDimension {
    name: 'enthalpy',
    dimension: 'M·L[2]·T[-2]';
    symbol: 'H';
}

export interface HeatCapacityDimension extends BaseDimension {
    name: 'heatCapacity',
    dimension: 'L[2]·M·T[-2]·Θ[-1]';
    symbol: 'C';
}

export interface FrequencyDimension extends BaseDimension {
    name: 'frequency',
    dimension: 'T[-1]';
    symbol: 'f';
}

export interface DensityDimension extends BaseDimension {
    name: 'density',
    dimension: 'M·L[-3]';
    symbol: 'ρ';
}

export interface ConcentrationDimension extends BaseDimension {
    name: 'concentration',
    dimension: 'N·L[-3]';
    symbol: 'c';
}

export interface ChargeDimension extends BaseDimension {
    name: 'charge',
    dimension: 'T·I';
    symbol: 'Q';
}

export interface PotentialDimension extends BaseDimension {
    name: 'potential',
    dimension: 'T[-1]·M·L[2]·I[-1]';
    symbol: 'V';
}

export type SIDimensionType =
    TimeDimension | LengthDimension | MassDimension | ElectricCurrentDimension |
    TemperatureDimension | AmountOfSubstanceDimension | LuminousIntensityDimension;

export type DerivedDimensionType =
    AreaDimension | VolumeDimension | VelocityDimension | AccelerationDimension |
    ForceDimension | EnergyDimension | PowerDimension | PressureDimension |
    EnthalpyDimension | HeatCapacityDimension | FrequencyDimension | DensityDimension |
    ConcentrationDimension | ChargeDimension | PotentialDimension;

export type DimensionType = SIDimensionType | DerivedDimensionType;

export const UNITS: Record< DimensionType[ 'name' ], Record< string, { text: string, factor: number, offset?: number } > > = {
    time: {
        s:      { text: 's', factor: 1 },
        m:      { text: 'min', factor: 60 },
        h:      { text: 'h', factor: 3600 },
        d:      { text: 'd', factor: 86400 },
        a:      { text: 'a', factor: 31557600 },
        ms:     { text: 'ms', factor: 1e-3 },
        μs:     { text: 'μs', factor: 1e-6 },
        ns:     { text: 'ns', factor: 1e-9 }
    },
    length: {
        m:      { text: 'm', factor: 1 },
        km:     { text: 'km', factor: 1e3 },
        cm:     { text: 'cm', factor: 1e-2 },
        mm:     { text: 'mm', factor: 1e-3 },
        μm:     { text: 'μm', factor: 1e-6 },
        nm:     { text: 'nm', factor: 1e-9 },
        pm:     { text: 'pm', factor: 1e-12 },
        A:      { text: 'Å', factor: 1e-10 },
        in:     { text: 'in', factor: 0.0254 },
        ft:     { text: 'ft', factor: 0.3048 },
        yd:     { text: 'yd', factor: 0.9144 },
        mi:     { text: 'mi', factor: 1609.344 }
    },
    mass: {
        kg:     { text: 'kg', factor: 1 },
        g:      { text: 'g', factor: 1e-3 },
        mg:     { text: 'mg', factor: 1e-6 },
        μg:     { text: 'μg', factor: 1e-9 },
        ng:     { text: 'ng', factor: 1e-12 },
        t:      { text: 't', factor: 1e3 },
        u:      { text: 'u', factor: 1.66053906660e-27 },
        Da:     { text: 'Da', factor: 1.66053906660e-27 }
    },
    electricCurrent: {
        A:      { text: 'A', factor: 1 },
        mA:     { text: 'mA', factor: 1e-3 },
        μA:     { text: 'μA', factor: 1e-6 }
    },
    temperature: {
        K:      { text: 'K', factor: 1 },
        C:      { text: '°C', factor: 1, offset: 273.15 },
        F:      { text: '°F', factor: 5/9, offset: 255.372222 }
    },
    amountOfSubstance: {
        mol:    { text: 'mol', factor: 1 },
        mmol:   { text: 'mmol', factor: 1e-3 },
        μmol:   { text: 'μmol', factor: 1e-6 }
    },
    luminousIntensity: {
        cd:     { text: 'cd', factor: 1 }
    },
    area: {
        m2:     { text: 'm[2]', factor: 1 },
        cm2:    { text: 'cm[2]', factor: 1e-4 },
        mm2:    { text: 'mm[2]', factor: 1e-6 },
        km2:    { text: 'km[2]', factor: 1e6 }
    },
    volume: {
        m3:     { text: 'm[3]', factor: 1 },
        L:      { text: 'L', factor: 1e-3 },
        ml:     { text: 'ml', factor: 1e-6 },
        cm3:    { text: 'cm[3]', factor: 1e-6 },
        mm3:    { text: 'mm[3]', factor: 1e-9 }
    },
    velocity: {
        ms:     { text: 'm·s[-1]', factor: 1 },
        kmh:    { text: 'km·h[-1]', factor: 1/3.6 }
    },
    acceleration: {
        ms2:    { text: 'm·s[-2]', factor: 1 }
    },
    force: {
        N:      { text: 'N', factor: 1 },
        kN:     { text: 'kN', factor: 1e3 },
        MN:     { text: 'MN', factor: 1e6 },
        GN:     { text: 'GN', factor: 1e9 }
    },
    energy: {
        J:      { text: 'J', factor: 1 },
        kJ:     { text: 'kJ', factor: 1e3 },
        eV:     { text: 'eV', factor: 1.602176634e-19 },
        MeV:    { text: 'MeV', factor: 1.602176634e-13 },
        Wh:     { text: 'Wh', factor: 3600 },
        kWh:    { text: 'kWh', factor: 3.6e6 },
        kcal:   { text: 'kcal', factor: 4184 }
    },
    power: {
        W:      { text: 'W', factor: 1 },
        kW:     { text: 'kW', factor: 1e3 }
    },
    pressure: {
        Pa:     { text: 'Pa', factor: 1 },
        kPa:    { text: 'kPa', factor: 1e3 },
        MPa:    { text: 'MPa', factor: 1e6 },
        bar:    { text: 'bar', factor: 1e5 },
        atm:    { text: 'atm', factor: 101325 },
        Torr:   { text: 'Torr', factor: 133.322368 },
        mmHg:   { text: 'mmHg', factor: 133.322368 }
    },
    enthalpy: {
        kgm2s2: { text: 'kg·m[2]·s[-2]', factor: 1 },
        kJkg:   { text: 'kJ·kg[-1]', factor: 1e3 },
        Jg:     { text: 'J·g[-1]', factor: 1e3 },
        kJmol:  { text: 'kJ·mol[-1]', factor: 1e3 }
    },
    heatCapacity: {
        JK:     { text: 'J·K[-1]', factor: 1 },
        kJK:    { text: 'kJ·K[-1]', factor: 1e3 },
        JmolK:  { text: 'J·mol[-1]·K[-1]', factor: 1 },
        kJmolK: { text: 'kJ·mol[-1]·K[-1]', factor: 1e3 },
        JkgK:   { text: 'J·kg[-1]·K[-1]', factor: 1e3 },
        kJkgK:  { text: 'kJ·kg[-1]·K[-1]', factor: 1e6 }
    },
    frequency: {
        Hz:     { text: 'Hz', factor: 1 },
        kHz:    { text: 'kHz', factor: 1e3 },
        MHz:    { text: 'MHz', factor: 1e6 }
    },
    density: {
        kgm3:   { text: 'kg·m[-3]', factor: 1 },
        gcm3:   { text: 'g·cm[-3]', factor: 1e3 },
        gmL:    { text: 'g·ml[-1]', factor: 1e3 },
        kgL:    { text: 'kg·L[-1]', factor: 1 },
        gL:     { text: 'g·L[-1]', factor: 1 }
    },
    concentration: {
        molL:   { text: 'mol·L[-1]', factor: 1e3 },
        mmolL:  { text: 'mmol·L[-1]', factor: 1 },
        pct:    { text: '%', factor: 10 }
    },
    charge: {
        C:      { text: 'C', factor: 1 },
        mC:     { text: 'mC', factor: 1e-3 },
        μC:     { text: 'μC', factor: 1e-6 },
        e:      { text: 'e', factor: 1.602176634e-19 }
    },
    potential: {
        V:      { text: 'V', factor: 1 },
        mV:     { text: 'mV', factor: 1e-3 }
    }
};

export interface Unit<D extends DimensionType> {
    dimension: D;
}
