import { createContext, useContext, useMemo } from 'react';
import { RangeDayColorType, SingleDayColorType } from '../types/types';

export type ConfigContextType = {
    minDate?: Date;
    maxDate?: Date;
    themeColor?: string;
    weekdays?: [string, string, string, string, string, string, string];
    startText?: string;
    endText?: string;
    selectText?: string;
    dayColor?: SingleDayColorType | RangeDayColorType;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);

interface ProviderProps {
    children: React.ReactNode;
    value: ConfigContextType;
}
export function ConfigProvider({ children, value }: ProviderProps) {
    const config = useMemo(() => {
        const defaultConfig = {} as ConfigContextType;
        return { defaultConfig, ...value };
    }, [value]);

    return (
        <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
    );
}

export const useConfigContext = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw Error('useConfigContext should be used in ConfigContext Provider');
    }
    return context;
};
