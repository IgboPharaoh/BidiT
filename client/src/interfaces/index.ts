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
