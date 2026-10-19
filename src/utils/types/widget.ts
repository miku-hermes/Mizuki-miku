import type {
	WidgetComponentConfig,
	WidgetComponentType,
} from "@/types/config";

/**
 * Widget 组件类型
 */
export type WidgetType = WidgetComponentType;

/**
 * Widget 组件配置
 */
export interface WidgetConfig extends WidgetComponentConfig {
	customProps?: Record<string, unknown>;
}
