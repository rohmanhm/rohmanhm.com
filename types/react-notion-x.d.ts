/* eslint-disable camelcase */

export interface CollectionRowProps {
  block: Block
}

export interface Block {
  id: string
  version: number
  type: string
  properties: Properties
  content: string[]
  created_time: number
  last_edited_time: number
  parent_id: string
  parent_table: string
  alive: boolean
  created_by_table: string
  created_by_id: string
  last_edited_by_table: string
  last_edited_by_id: string
  shard_id: number
  space_id: string
}

export interface Properties {
  '@}b{': Array<Array<Array<string[]> | string>>
  'NL}{': Array<string[]>
  'p@}w': Array<string[]>
  sWNr: Array<string[]>
  title: Array<string[]>
}
