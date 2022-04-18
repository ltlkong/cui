export type Skins = 'dark' | 'light' | 'none'

export interface WithTypeSkin<Type, Skin> {
  sType?: Type
  skin?: Skin
}
