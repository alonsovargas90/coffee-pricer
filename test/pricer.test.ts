import { describe, it, expect } from 'vitest';
import { CreamerEnum, SizeEnum } from "@types";
import { createPricer } from '../src/pricer';

describe('createPricer', () => {
  it('provides the latest price given the options selected so far', () => {
    const pricer = createPricer();

    pricer('size', SizeEnum.Small);
    const defaultPrice = pricer('creamer', CreamerEnum.None);
    expect(defaultPrice).toBe(1.0);

    const priceAfterFirstSelection = pricer('creamer', CreamerEnum.Dairy);
    expect(priceAfterFirstSelection).toBe(1.25);

    const priceAfterSecondSelection = pricer('creamer', CreamerEnum.NonDairy);
    expect(priceAfterSecondSelection).toBe(1.5);

    const priceAfterThirdSelection = pricer('size', SizeEnum.Large);
    expect(priceAfterThirdSelection).toBe(2.5);
  });
});