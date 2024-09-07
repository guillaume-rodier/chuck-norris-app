import { h } from "vue"
import type { IconSet, IconProps } from "vuetify"
import ElementPlusIcon from "@/iconsets/icons/ElementPlusIcon.vue"
import VsCodeIcon from "@/iconsets/icons/VsCodeIcon.vue"

const customSvgNameToComponent: any = {
  ElementPlusIcon,
  VsCodeIcon,
}

const customSets: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon as string]),
}

export { customSets }
