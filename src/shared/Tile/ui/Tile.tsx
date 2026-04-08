import styles from './Tile.module.scss'
import * as React from "react";
import {colorMap} from "@shared/utils/mapping.ts";

interface TileProps {
  children: React.ReactNode;
  color: 'lime' | 'cyan';
}

const Tile = (props: TileProps) => {
  const {
    children,
    color,
  } = props

  return (
    <span className={styles.tile} style={{ '--tile-color': colorMap[color] }}>{children}</span>
  )
}
export default Tile
