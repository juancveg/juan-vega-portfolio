export interface ToolItem {
  name: string;
  level?: string;
  tag?: string;
  iconId?: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  tools: ToolItem[];
}
