<script setup lang="ts">
import { getHighlighter } from 'shikiji'

const replayTheme = {
    name: 'replay-theme',
    type: 'dark',
    colors: {},
    tokenColors: [
        {
            name: 'unison punctuation',
            scope: 'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'regexp constant character-class',
            scope: 'constant.other.character-class.regexp',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'regexp operator.quantifier',
            scope: 'keyword.operator.quantifier.regexp',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'punctuation.definition',
            scope: 'punctuation.definition.string.begin,punctuation.definition.string.end',
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'Text',
            scope: 'variable.parameter.function',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Comment Markup Link',
            scope: 'comment markup.link',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'markup diff',
            scope: 'markup.changed.diff',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'diff',
            scope: 'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'inserted.diff',
            scope: 'markup.inserted.diff',
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'deleted.diff',
            scope: 'markup.deleted.diff',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'js/ts punctuation separator key-value',
            scope: 'punctuation.separator.key-value',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'js/ts import keyword',
            scope: 'keyword.operator.expression.import',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'math js/ts',
            scope: 'support.constant.math',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'math property js/ts',
            scope: 'support.constant.property.math',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'js/ts variable.other.constant',
            scope: 'variable.other.constant',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'operator logical',
            scope: 'keyword.operator.logical',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'operator channel',
            scope: 'keyword.operator.channel',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'js/ts module',
            scope: 'support.module.node,support.type.object.module,support.module.node',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'entity.name.type.module',
            scope: 'entity.name.type.module',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'js variable readwrite',
            scope: 'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'js/ts json',
            scope: 'support.constant.json',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'js/ts Keyword',
            scope: [
                'keyword.operator.expression.instanceof',
                'keyword.operator.new',
                'keyword.operator.ternary',
                'keyword.operator.optional',
                'keyword.operator.expression.keyof'
            ],
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'js/ts console',
            scope: 'support.type.object.console',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'js/ts support.variable.property.process',
            scope: 'support.variable.property.process',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'js console function',
            scope: 'entity.name.function,support.function.console',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'operator',
            scope: 'keyword.operator.delete',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'js dom',
            scope: 'support.type.object.dom',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'js dom variable',
            scope: 'support.variable.dom,support.variable.property.dom',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'keyword.operator',
            scope: 'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Punctuation',
            scope: 'punctuation.separator.delimiter',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Operators',
            scope: 'keyword.operator',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Compound Assignment Operators',
            scope: 'keyword.operator.assignment.compound',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Compound Assignment Operators js/ts',
            scope: 'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Keywords',
            scope: 'keyword',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Namespaces',
            scope: 'entity.name.namespace',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Variables',
            scope: 'variable',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Language variables',
            scope: 'variable.language',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Packages',
            scope: 'token.package.keyword',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Packages',
            scope: 'token.package',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Functions',
            scope: [
                'entity.name.function',
                'meta.require',
                'support.function.any-method',
                'variable.function'
            ],
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'Classes',
            scope: 'entity.name.type.namespace',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Classes',
            scope: 'support.class, entity.name.type.class',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Class name',
            scope: 'entity.name.class.identifier.namespace.type',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Class name',
            scope: [
                'entity.name.class',
                'variable.other.class.js',
                'variable.other.class.ts'
            ],
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Type Name',
            scope: 'entity.name.type',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Keyword Control',
            scope: 'keyword.control',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Control Elements',
            scope: 'control.elements, keyword.operator.less',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Methods',
            scope: 'keyword.other.special-method',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'Storage',
            scope: 'storage',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Storage JS TS',
            scope: 'token.storage',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
            scope: 'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Support',
            scope: 'support.function',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Support type',
            scope: 'support.type.property-name',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Support type',
            scope: 'support.constant.property-value',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Support type',
            scope: 'support.constant.font-name',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Meta tag',
            scope: 'meta.tag',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Strings',
            scope: 'string',
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'Inherited Class',
            scope: 'entity.other.inherited-class',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'Constant other symbol',
            scope: 'constant.other.symbol',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Integers',
            scope: 'constant.numeric',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Constants',
            scope: 'constant',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Constants',
            scope: 'punctuation.definition.constant',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Tags',
            scope: 'entity.name.tag',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Attributes',
            scope: 'entity.other.attribute-name',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Attribute IDs',
            scope: 'entity.other.attribute-name.id',
            settings: {
                fontStyle: 'normal',
                foreground: '#58e0ff'
            }
        },
        {
            name: 'Attribute class',
            scope: 'entity.other.attribute-name.class.css',
            settings: {
                fontStyle: 'normal',
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Selector',
            scope: 'meta.selector',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Headings',
            scope: 'markup.heading',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Headings',
            scope: 'markup.heading punctuation.definition.heading, entity.name.section',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'Units',
            scope: 'keyword.other.unit',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Bold',
            scope: 'markup.bold,todo.bold',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            name: 'Bold',
            scope: 'punctuation.definition.bold',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'markup Italic',
            scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'emphasis md',
            scope: 'emphasis md',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Regular Expressions',
            scope: 'string.regexp',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Escape Characters',
            scope: 'constant.character.escape',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'Embedded',
            scope: 'punctuation.section.embedded, variable.interpolation',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Embedded',
            scope: 'punctuation.section.embedded.begin,punctuation.section.embedded.end',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'illegal',
            scope: 'invalid.illegal',
            settings: {
                foreground: '#ffffff'
            }
        },
        {
            name: 'illegal',
            scope: 'invalid.illegal.bad-ampersand.html',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Broken',
            scope: 'invalid.broken',
            settings: {
                foreground: '#ffffff'
            }
        },
        {
            name: 'Deprecated',
            scope: 'invalid.deprecated',
            settings: {
                foreground: '#ffffff'
            }
        },
        {
            name: 'Unimplemented',
            scope: 'invalid.unimplemented',
            settings: {
                foreground: '#ffffff'
            }
        },
        {
            name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
            scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
            scope: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
            scope: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
            scope: 'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'parameter function js/ts',
            scope: 'function.parameter',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'brace function',
            scope: 'function.brace',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'ts primitive/builtin types',
            scope: 'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'block scope',
            scope: 'block.scope.end,block.scope.begin',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            scope: 'token.info-token',
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            scope: 'token.warn-token',
            settings: {
                foreground: '#b0fff4d3'
            }
        },
        {
            scope: 'token.error-token',
            settings: {
                foreground: '#f44747'
            }
        },
        {
            scope: 'token.debug-token',
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'String interpolation',
            scope: [
                'punctuation.definition.template-expression.begin',
                'punctuation.definition.template-expression.end',
                'punctuation.section.embedded'
            ],
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'Reset JavaScript string interpolation expression',
            scope: [
                'meta.template.expression'
            ],
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Import module JS',
            scope: [
                'keyword.operator.module'
            ],
            settings: {
                foreground: '#aa98ff'
            }
        },
        {
            name: 'js Flowtype',
            scope: [
                'support.type.type.flowtype'
            ],
            settings: {
                foreground: '#58e0ff'
            }
        },
        {
            name: 'js Flow',
            scope: [
                'support.type.primitive'
            ],
            settings: {
                foreground: '#ff98eb'
            }
        },
        {
            name: 'js class prop',
            scope: [
                'meta.property.object'
            ],
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'js func parameter',
            scope: [
                'variable.parameter.function.js'
            ],
            settings: {
                foreground: '#ff42a9'
            }
        },
        {
            name: 'js template literals begin',
            scope: [
                'keyword.other.template.begin'
            ],
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'js template literals end',
            scope: [
                'keyword.other.template.end'
            ],
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'js template literals variable braces begin',
            scope: [
                'keyword.other.substitution.begin'
            ],
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'js template literals variable braces end',
            scope: [
                'keyword.other.substitution.end'
            ],
            settings: {
                foreground: '#08aafa'
            }
        },
        {
            name: 'js operator.assignment',
            scope: [
                'keyword.operator.assignment'
            ],
            settings: {
                foreground: '#b8d0eb'
            }
        },
        {
            name: 'meta.brace.square',
            scope: [
                ' meta.brace.square'
            ],
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'Comments',
            scope: 'comment, punctuation.definition.comment',
            settings: {
                fontStyle: 'italic',
                foreground: '#acd8db77'
            }
        },
        {
            name: '[VSCODE-CUSTOM] Markdown Quote',
            scope: 'markup.quote.markdown',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'punctuation.definition.block.sequence.item.yaml',
            scope: 'punctuation.definition.block.sequence.item.yaml',
            settings: {
                foreground: '#acd8db77'
            }
        },
        {
            name: 'js/ts italic',
            scope: 'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
            settings: {
                fontStyle: 'italic'
            }
        },
        {
            name: 'comment',
            scope: 'comment.line.double-slash,comment.block.documentation',
            settings: {
                fontStyle: 'italic'
            }
        },
        {
            name: 'Python Keyword Control',
            scope: 'keyword.control.import.python,keyword.control.flow.python',
            settings: {
                fontStyle: 'italic'
            }
        },
        {
            name: 'markup.italic.markdown',
            scope: 'markup.italic.markdown',
            settings: {
                fontStyle: 'italic'
            }
        }
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
        enumMember: {
            foreground: '#b8d0eb'
        },
        'variable.constant': {
            foreground: '#b0fff4d3'
        },
        'variable.defaultLibrary': {
            foreground: '#ff98eb'
        }
    }
}

const highlighter = await getHighlighter()

const props = defineProps<{
  code: string
  icon?: string
  language?: string
  hideHeader?: boolean
  filename?: string
  highlights?: number[]
  meta?: string
}>()

const config = {
  wrapper: '[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5',
  header: 'flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose',
  icon: {
    base: ''
  },
  button: {
    base: 'absolute top-2.5 right-2.5'
  },
  filename: 'text-gray-700 dark:text-gray-200 text-sm/6'
}

const { ui } = useUI('content.prose.code', undefined, config, undefined, true)

// @ts-ignore
await highlighter.loadTheme(replayTheme)
await highlighter.loadLanguage('bash')
await highlighter.loadLanguage('sh')
await highlighter.loadLanguage('jsx')
await highlighter.loadLanguage('tsx')
await highlighter.loadLanguage('ansi')
await highlighter.loadLanguage('yml')
await highlighter.loadLanguage('yaml')
await highlighter.loadLanguage('json')
await highlighter.loadLanguage('js')
await highlighter.loadLanguage('ts')

const transformedCode = ref()

const formatted = highlighter.codeToHtml(props.code, {
  lang: props.language,
  theme: 'replay-theme'
})

transformedCode.value = formatted
  .replaceAll('<span class="line"></span>', '')
  .replaceAll('<span class="line">', '<span class="code-line">') // remove default classes
  .split('<span class="code-line">').filter(line => line.trim() !== '') // split each line
  .map((line, index) => index === 0 ? line : '<span class="code-line">' + line) // 
  .map((line, num) => num !== 0 ? `<span ${props.highlights.includes(num) ? 'class="highlight"' : ''}><span class="line-number">${(num).toString().padStart(2, ' ')}  </span>${line}</span>` : line)
  .join('')

</script>
<template>
  <div class="relative" :class="!!filename && ui.wrapper">
    <div v-if="filename && !hideHeader" :class="ui.header">
      <ProseCodeIcon :icon="icon" :filename="filename" :class="ui.icon.base" />

      <span :class="ui.filename">{{ filename }}</span>
    </div>

    <ProseCodeButton :code="code" :class="ui.button.base" />

    <div v-html="transformedCode" />
    <!-- <slot /> -->
  </div>
</template>

<style>
.code-line {
  height: 0px;
  min-height: 0px;
}

.line-number {
  @apply select-none contents align-top text-gray-500;
}

.highlight {
  background-color: #ffffff0f !important;
}
.replay-theme {
  @apply mt-0
}
</style>