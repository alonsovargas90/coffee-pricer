import { Category, Price, Option, SizeEnum, CreamerEnum } from "@types"


export interface Pricer {
/**
* Invoked each time the user makes a selection.
* No need to validate arguments,the caller validates the arguments
before this function is invoked.
* @returns the _total_ price of the coffee so far given all the
selections made
*/
(category: Category, option: Option): Price
}

/**
* A new pricer is created for each coffee being purchased.
*/

type PricerState = Readonly<{
  size: SizeEnum;
  creamer: CreamerEnum;
}>;

/* Based on the test cases  */
const DEFAULT_STATE: PricerState = {
  size: SizeEnum.Small,
  creamer: CreamerEnum.None,
};

export const createPricer = (): Pricer => {
    /* Prices Records to match each type to the price */
    /* 
        Normally We should have this type of Data on its own file since we can have a lot more data and growing complexity 
        But since its just a simple example i will leave it here with that note in mind cause its only used on this context for now
    */
    const sizePrices: Readonly<Record<SizeEnum, number>> = {
        [SizeEnum.Small]: 1.0,
        [SizeEnum.Medium]: 1.5,
        [SizeEnum.Large]: 2.0,
    }
    const creamerPrices: Readonly<Record<CreamerEnum, number>> = {
        [CreamerEnum.None]: 0,
        [CreamerEnum.Dairy]: 0.25,
        [CreamerEnum.NonDairy]: 0.5,
    }
    let state: PricerState = DEFAULT_STATE;

    return (category: Category, option: Option): Price => {
        //Inmutable state
        state = category === 'size'
            ? { ...state, size: option as SizeEnum}
            : { ...state, creamer: option as CreamerEnum};

        const sizePrice = sizePrices[state.size];
        const creamerPrice = creamerPrices[state.creamer];
        return sizePrice + creamerPrice;
    }
}