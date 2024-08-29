interface HugeDropDown {
    icon: IntrinsicAttributes;
    title: string;
    selection_data: string [];
    onSelectChange: (value: string) => void;
}

interface PropertiesSlider {
    properties_data: any [];
    animation_speed: number;
}

interface PropertiesGrid {
    properties_data: any [];
}