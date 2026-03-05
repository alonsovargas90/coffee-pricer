import {  Category,
  Option,
  Size,
  Creamer,
  Price, } from "@types"
import {
  SIZE_PRICES,
  CREAMER_PRICES,
} from './constants';

export interface Pricer {
/**
* Invoked each time the user makes a selection.
* No need to validate arguments,the caller validates the arguments
before this function is invoked.
* @returns the _total_ price of the coffee so far given all the
selections made
*/
// I refactor the signature as well to enforce correct category-option type calling 
(category: 'size', option: Size): Price;
(category: 'creamer', option: Creamer): Price; 
}

/**
* A new pricer is created for each coffee being purchased.
*/

type PricerState = Readonly<{
  size: Size;
  creamer: Creamer;
}>;

/* Based on the test cases  */
const DEFAULT_STATE = {
  size: 'small',
  creamer: 'none',
} as const satisfies PricerState;

export const createPricer = (): Pricer => {
    let state: PricerState = DEFAULT_STATE;

    return (category: Category, option: Option): Price => {
        //Inmutable state
        state = category === 'size'
            ? { ...state, size: option as Size}
            : { ...state, creamer: option as Creamer};

        return (
            SIZE_PRICES[state.size] +
            CREAMER_PRICES[state.creamer]
        );
    }
}