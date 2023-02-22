export interface TimeState {
    hours: number;
    min: number;
    sec: number;
}

export type InputProps = {
    labelName: string;
    placeholder: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type: React.HTMLInputTypeAttribute;
};

export interface SelectPaymentInputProps {
    paymentImage: string;
    selected?: boolean;
    radioValue?: 'bitcoin' | 'lightning';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickFlex: () => void;
    name: string;
    checked?: boolean;
}

export interface PaymentChoiceProps {
    selected: boolean;
    onNextCallback: () => void;
    onPreviousCallback: () => void;
}
export interface ItemInfoProps {
    createBidCallback: () => void;
}
