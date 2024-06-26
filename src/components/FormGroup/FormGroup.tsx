import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useMemo,
} from 'react'
import { isStyledComponent } from 'styled-components'
import { tv } from 'tailwind-variants'

import { useId } from '../../hooks/useId'
import { MultiComboBox, SingleComboBox } from '../ComboBox'
import { DatePicker } from '../DatePicker'
import { DropZone } from '../DropZone'
import { HeadingTypes } from '../Heading'
import { FaCircleExclamationIcon } from '../Icon'
import { CurrencyInput, Input } from '../Input'
import { InputFile } from '../InputFile'
import { Cluster, Stack } from '../Layout'
import { Select } from '../Select'
import { StatusLabel } from '../StatusLabel'
import { Text } from '../Text'
import { Textarea } from '../Textarea'
import { visuallyHiddenText } from '../VisuallyHiddenText/VisuallyHiddenText'

import type { Gap } from '../../types'
type StatusLabelProps = ComponentProps<typeof StatusLabel>

type Props = PropsWithChildren<{
  /** グループのタイトル名 */
  title: ReactNode
  /** タイトルの見出しのタイプ */
  titleType?: HeadingTypes
  /** タイトルの見出しを視覚的に隠すかどうか */
  dangerouslyTitleHidden?: boolean
  /** label 要素に適用する `htmlFor` 値 */
  htmlFor?: string
  /** label 要素に適用する `id` 値 */
  labelId?: string
  /** タイトル群と子要素の間の間隔調整用（基本的には不要） */
  innerMargin?: Gap
  /** タイトルの隣に表示する `StatusLabel` の Props の配列 */
  statusLabelProps?: StatusLabelProps | StatusLabelProps[]
  /** タイトルの下に表示するヘルプメッセージ */
  helpMessage?: ReactNode
  /** タイトルの下に表示する入力例 */
  exampleMessage?: ReactNode
  /** タイトルの下に表示するエラーメッセージ */
  errorMessages?: ReactNode | ReactNode[]
  /** フォームコントロールの下に表示する補足メッセージ */
  supplementaryMessage?: ReactNode
  /** `true` のとき、文字色を `TEXT_DISABLED` にする */
  disabled?: boolean
  as?: string | React.ComponentType<any>
}>
type ElementProps = Omit<ComponentPropsWithoutRef<'div'>, keyof Props | 'aria-labelledby'>

const formGroup = tv({
  slots: {
    wrapper: [
      'smarthr-ui-FormGroup',
      'shr-mx-[unset] shr-border-none shr-p-[unset]',
      'disabled:shr-text-disabled',
      '[&:disabled_.smarthr-ui-FormGroup-label_>_span]:shr-text-disabled',
      '[&:disabled_.smarthr-ui-FormGroup-errorMessage]:shr-text-inherit',
      '[&:disabled_.smarthr-ui-FormGroup-supplementaryMessage]:shr-text-inherit',
      '[&:disabled_.smarthr-ui-Input]:shr-border-default/50 [&:disabled_.smarthr-ui-Input]:shr-bg-white-darken',
    ],
    label: [
      'smarthr-ui-FormGroup-label',
      // flex-item が stretch してクリッカブル領域が広がりすぎないようにする
      'shr-self-start',
      'shr-px-[unset]',
    ],
    errorIcon: ['smarthr-ui-FormGroup-errorMessage', 'shr-text-danger'],
  },
})

const childrenWrapper = tv({
  variants: {
    innerMargin: {
      0: '[&&&]:shr-mt-0',
      0.25: '[&&&]:shr-mt-0.25',
      0.5: '[&&&]:shr-mt-0.5',
      0.75: '[&&&]:shr-mt-0.75',
      1: '[&&&]:shr-mt-1',
      1.25: '[&&&]:shr-mt-1.25',
      1.5: '[&&&]:shr-mt-1.5',
      2: '[&&&]:shr-mt-2',
      2.5: '[&&&]:shr-mt-2.5',
      3: '[&&&]:shr-mt-3',
      3.5: '[&&&]:shr-mt-3.5',
      4: '[&&&]:shr-mt-4',
      8: '[&&&]:shr-mt-8',
      X3S: '[&&&]:shr-mt-0.25',
      XXS: '[&&&]:shr-mt-0.5',
      XS: '[&&&]:shr-mt-1',
      S: '[&&&]:shr-mt-1.5',
      M: '[&&&]:shr-mt-2',
      L: '[&&&]:shr-mt-2.5',
      XL: '[&&&]:shr-mt-3',
      XXL: '[&&&]:shr-mt-3.5',
      X3L: '[&&&]:shr-mt-4',
    } as { [key in Gap]: string },
    isRoleGroup: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      innerMargin: undefined,
      isRoleGroup: true,
      className: '[&&&]:shr-mt-1',
    },
    {
      innerMargin: undefined,
      isRoleGroup: false,
      className: '[&&&]:shr-mt-0.5',
    },
  ],
})

/**
 * @deprecated `FormGroup` コンポーネントは非推奨です。代わりに `FormControl` や `Fieldset` を使ってください。
 */
export const FormGroup: React.FC<Props & ElementProps> = ({
  title,
  titleType = 'blockTitle',
  dangerouslyTitleHidden = false,
  htmlFor,
  labelId,
  innerMargin,
  statusLabelProps = [],
  helpMessage,
  exampleMessage,
  errorMessages,
  supplementaryMessage,
  as = 'div',
  className,
  children,
  ...props
}) => {
  const managedHtmlFor = useId(htmlFor)
  const managedLabelId = useId(labelId)
  const isRoleGroup = as === 'fieldset'
  const statusLabelList = Array.isArray(statusLabelProps) ? statusLabelProps : [statusLabelProps]

  const describedbyIds = useMemo(
    () =>
      Object.entries({ helpMessage, exampleMessage, supplementaryMessage, errorMessages })
        .filter(({ 1: value }) => value)
        .map(([key]) => `${managedHtmlFor}_${key}`)
        .join(' '),
    [helpMessage, exampleMessage, supplementaryMessage, errorMessages, managedHtmlFor],
  )
  const actualErrorMessages = useMemo(() => {
    if (!errorMessages) {
      return []
    }

    return Array.isArray(errorMessages) ? errorMessages : [errorMessages]
  }, [errorMessages])

  const { wrapperStyle, labelStyle, errorIconStyle, childrenWrapperStyle } = useMemo(() => {
    const { wrapper, label, errorIcon } = formGroup()
    return {
      wrapperStyle: wrapper({ className }),
      labelStyle: label({ className: dangerouslyTitleHidden ? visuallyHiddenText() : '' }),
      errorIconStyle: errorIcon(),
      childrenWrapperStyle: childrenWrapper({ innerMargin, isRoleGroup }),
    }
  }, [className, dangerouslyTitleHidden, innerMargin, isRoleGroup])

  return (
    <Stack
      {...props}
      as={as}
      gap={innerMargin ?? 0.5}
      aria-labelledby={isRoleGroup ? managedLabelId : undefined}
      aria-describedby={isRoleGroup && describedbyIds ? describedbyIds : undefined}
      className={wrapperStyle}
    >
      <Cluster
        align="center"
        htmlFor={!isRoleGroup ? managedHtmlFor : undefined}
        id={managedLabelId}
        className={labelStyle}
        as={isRoleGroup ? 'legend' : 'label'}
        // Stack 対象にしないための hidden
        hidden={dangerouslyTitleHidden || undefined}
      >
        <Text as="span" styleType={titleType}>
          {title}
        </Text>
        {statusLabelList.length > 0 && (
          <Cluster gap={0.25} as="span">
            {statusLabelList.map((statusLabelProp, index) => (
              <StatusLabel {...statusLabelProp} key={index} />
            ))}
          </Cluster>
        )}
      </Cluster>

      {helpMessage && (
        <p className="smarthr-ui-FormGroup-helpMessage" id={`${managedHtmlFor}_helpMessage`}>
          {helpMessage}
        </p>
      )}
      {exampleMessage && (
        <Text
          as="p"
          color="TEXT_GREY"
          italic
          id={`${managedHtmlFor}_exampleMessage`}
          className="smarthr-ui-FormGroup-exampleMessage"
        >
          {exampleMessage}
        </Text>
      )}

      {actualErrorMessages.length > 0 && (
        <Stack gap={0} id={`${managedHtmlFor}_errorMessages`}>
          {actualErrorMessages.map((message, index) => (
            <p key={index}>
              <FaCircleExclamationIcon text={message} className={errorIconStyle} />
            </p>
          ))}
        </Stack>
      )}

      <div className={childrenWrapperStyle}>
        {addIdToFirstInput(children, managedHtmlFor, describedbyIds)}
      </div>

      {supplementaryMessage && (
        <Text
          as="p"
          size="S"
          color="TEXT_GREY"
          id={`${managedHtmlFor}_supplementaryMessage`}
          className="smarthr-ui-FormGroup-supplementaryMessage"
        >
          {supplementaryMessage}
        </Text>
      )}
    </Stack>
  )
}

const addIdToFirstInput = (children: ReactNode, managedHtmlFor: string, describedbyIds: string) => {
  let foundFirstInput = false

  const addId = (targets: ReactNode): ReactNode[] | ReactNode =>
    React.Children.map(targets, (child) => {
      if (foundFirstInput || !React.isValidElement(child)) {
        return child
      }

      const { type } = child

      if (isInputElement(type)) {
        foundFirstInput = true

        const inputAttributes = {
          id: managedHtmlFor,
          ...(describedbyIds ? { 'aria-describedby': describedbyIds } : {}),
        }

        return React.cloneElement(child as ReactElement, {
          ...(isComboBoxElement(type) ? { inputAttributes } : inputAttributes),
        })
      }

      return React.cloneElement(child, {}, addId(child.props.children))
    })

  return addId(children)
}

/**
 * - CheckBox / RadioButton は内部に label を含むため対象外
 * - SearchInput は label を含むため対象外
 * - InputWithTooltip は領域が狭く FormControl を置けない場所での私用を想定しているため対象外
 *
 * @param type
 * @returns
 */
const isInputElement = (type: string | React.JSXElementConstructor<any>) => {
  const _type = isStyledComponent(type) ? type.target : type
  return (
    _type === Input ||
    _type === CurrencyInput ||
    _type === Textarea ||
    _type === DatePicker ||
    _type === Select ||
    _type === SingleComboBox ||
    _type === MultiComboBox ||
    _type === InputFile ||
    _type === DropZone
  )
}

const isComboBoxElement = (type: string | React.JSXElementConstructor<any>) => {
  const _type = isStyledComponent(type) ? type.target : type
  return _type === SingleComboBox || _type === MultiComboBox
}
