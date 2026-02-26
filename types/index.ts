//I just always like to have a types folder for order and cleanes
// also for order lets create enums to split options in two subtypes
//To control easier the combination on when they change
//Since it doesn't make sense to have Two option of the same subtype

export enum SizeEnum{
    Small = 'small',
    Medium = 'medium',
    Large= 'large'
}
export enum CreamerEnum{
    None = 'none', 
    Dairy = 'dairy',
    NonDairy = 'non-dairy'
}

export type Category = 'size' | 'creamer';
export type Option = SizeEnum | CreamerEnum;
export type Price = number;
