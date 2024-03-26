import { UUID } from "crypto"

export interface ToolFunction {
  id: string
  toolFunction: Function
  description: string
  parameters: Parameter[]
}

export interface Parameter {
  name: string
  description: string
  required: boolean
  schema: Schema
}

export interface Schema {
  type: string
}

export interface PlatformTool {
  id: string
  toolName: string
  name: string
  version: string
  description: string
  systemMessage?: string
  toolsFunctions: ToolFunction[]
}

export interface ImageGeneratorResult {
  url: string
  prompt: string
}
export interface GetYoutubeCaptionsResult {
  subtitles: {
    start: string
    dur: string
    text: string
  }[]
  imageUrl: string
  videoUrl: string
}

interface KnowledgeGraph {
  title: string
  type: string
  website: string
  imageUrl: string
  description: string
  descriptionSource: string
  descriptionLink: string
  attributes: {
    Headquarters: string
    CEO: string
    Founded: string
    Sales: string
    Products: string
    Founders: string
    Subsidiaries: string
  }
}

interface OrganicResult {
  title: string
  link: string
  snippet: string
  sitelinks?: { title: string; link: string }[]
  position?: number
  attributes?: Record<string, string>
  date?: string
}

interface PeopleAlsoAsk {
  question: string
  snippet: string
  title: string
  link: string
}

interface RelatedSearches {
  query: string
}

export type GoogleSearchResult = {
  searchParameters: {
    q: string
    gl: string
    hl: string
    autocorrect: string
    page: number
    type: string
  }
  knowledgeGraph?: KnowledgeGraph
  organic: OrganicResult[]
  peopleAlsoAsk?: PeopleAlsoAsk[]
  relatedSearches?: RelatedSearches[]
}

export interface WebScraperResult {
  url: string
}
