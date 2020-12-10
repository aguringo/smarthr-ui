import { storiesOf } from '@storybook/react'
import * as React from 'react'
import styled, { css } from 'styled-components'

import {
  ComponentProps,
  FaAddressBookIcon,
  FaAddressCardIcon,
  FaAngleDoubleDownIcon,
  FaAngleDoubleLeftIcon,
  FaAngleDoubleRightIcon,
  FaAngleDownIcon,
  FaAngleLeftIcon,
  FaAngleRightIcon,
  FaAngleUpIcon,
  FaArchiveIcon,
  FaArrowAltCircleDownIcon,
  FaArrowAltCircleLeftIcon,
  FaArrowAltCircleRightIcon,
  FaArrowAltCircleUpIcon,
  FaArrowCircleDownIcon,
  FaArrowDownIcon,
  FaArrowLeftIcon,
  FaArrowRightIcon,
  FaArrowUpIcon,
  FaArrowsAltHIcon,
  FaArrowsAltIcon,
  FaArrowsAltVIcon,
  FaAsteriskIcon,
  FaBanIcon,
  FaBarsIcon,
  FaBellIcon,
  FaBellSlashIcon,
  FaBirthdayCakeIcon,
  FaBoltIcon,
  FaBookIcon,
  FaBookOpenIcon,
  FaBookmarkIcon,
  FaBoxIcon,
  FaBoxOpenIcon,
  FaBoxesIcon,
  FaBriefcaseIcon,
  FaBuildingIcon,
  FaBullhornIcon,
  FaBusAltIcon,
  FaBusIcon,
  FaBusinessTimeIcon,
  FaCalculatorIcon,
  FaCalendarAltIcon,
  FaCalendarCheckIcon,
  FaCalendarDayIcon,
  FaCalendarIcon,
  FaCalendarMinusIcon,
  FaCalendarPlusIcon,
  FaCalendarTimesIcon,
  FaCalendarWeekIcon,
  FaCameraIcon,
  FaCarAltIcon,
  FaCarIcon,
  FaCarSideIcon,
  FaCaretDownIcon,
  FaCaretLeftIcon,
  FaCaretRightIcon,
  FaCaretSquareDownIcon,
  FaCaretSquareLeftIcon,
  FaCaretSquareRightIcon,
  FaCaretSquareUpIcon,
  FaCaretUpIcon,
  FaChartAreaIcon,
  FaChartBarIcon,
  FaChartLineIcon,
  FaChartPieIcon,
  FaCheckCircleIcon,
  FaCheckIcon,
  FaCheckSquareIcon,
  FaChevronCircleDownIcon,
  FaChevronCircleLeftIcon,
  FaChevronCircleRightIcon,
  FaChevronCircleUpIcon,
  FaChevronDownIcon,
  FaChevronLeftIcon,
  FaChevronRightIcon,
  FaChevronUpIcon,
  FaCircleIcon,
  FaClipboardCheckIcon,
  FaClipboardIcon,
  FaClipboardListIcon,
  FaClockIcon,
  FaCloneIcon,
  FaCloudDownloadAltIcon,
  FaCloudIcon,
  FaCloudUploadAltIcon,
  FaCodeIcon,
  FaCogIcon,
  FaCogsIcon,
  FaCoinsIcon,
  FaColumnsIcon,
  FaCommentAltIcon,
  FaCommentDotsIcon,
  FaCommentIcon,
  FaCommentSlashIcon,
  FaCommentsIcon,
  FaCompressIcon,
  FaCopyIcon,
  FaCreditCardIcon,
  FaCubeIcon,
  FaCubesIcon,
  FaDatabaseIcon,
  FaDoorClosedIcon,
  FaDoorOpenIcon,
  FaEditIcon,
  FaEllipsisHIcon,
  FaEllipsisVIcon,
  FaEnvelopeIcon,
  FaEnvelopeOpenIcon,
  FaEnvelopeOpenTextIcon,
  FaExchangeAltIcon,
  FaExclamationCircleIcon,
  FaExclamationIcon,
  FaExclamationTriangleIcon,
  FaExpandArrowsAltIcon,
  FaExpandIcon,
  FaExternalLinkAltIcon,
  FaEyeIcon,
  FaEyeSlashIcon,
  FaFileAltIcon,
  FaFileArchiveIcon,
  FaFileDownloadIcon,
  FaFileExportIcon,
  FaFileIcon,
  FaFileImportIcon,
  FaFileUploadIcon,
  FaFilterIcon,
  FaFlagIcon,
  FaFolderIcon,
  FaFolderMinusIcon,
  FaFolderOpenIcon,
  FaFolderPlusIcon,
  FaFontIcon,
  FaForwardIcon,
  FaGiftIcon,
  FaGlobeIcon,
  FaGraduationCapIcon,
  FaGripHorizontalIcon,
  FaGripLinesIcon,
  FaGripLinesVerticalIcon,
  FaGripVerticalIcon,
  FaHandPaperIcon,
  FaHandPointDownIcon,
  FaHandPointLeftIcon,
  FaHandPointRightIcon,
  FaHandPointUpIcon,
  FaHandsIcon,
  FaHandshakeIcon,
  FaHeartIcon,
  FaHistoryIcon,
  FaHomeIcon,
  FaHospitalAltIcon,
  FaHospitalIcon,
  FaHourglassEndIcon,
  FaHourglassHalfIcon,
  FaHourglassIcon,
  FaHourglassStartIcon,
  FaIdBadgeIcon,
  FaIdCardAltIcon,
  FaIdCardIcon,
  FaImageIcon,
  FaImagesIcon,
  FaInboxIcon,
  FaInfoCircleIcon,
  FaInfoIcon,
  FaKeyIcon,
  FaKeyboardIcon,
  FaLightbulbIcon,
  FaLinkIcon,
  FaListAltIcon,
  FaListIcon,
  FaListOlIcon,
  FaListUlIcon,
  FaLockIcon,
  FaLockOpenIcon,
  FaLongArrowAltDownIcon,
  FaLongArrowAltLeftIcon,
  FaLongArrowAltRightIcon,
  FaLongArrowAltUpIcon,
  FaMinusCircleIcon,
  FaMinusIcon,
  FaMinusSquareIcon,
  FaMobileAltIcon,
  FaMobileIcon,
  FaMoneyBillAltIcon,
  FaMoneyBillIcon,
  FaMoneyBillWaveAltIcon,
  FaMoneyBillWaveIcon,
  FaMoneyCheckAltIcon,
  FaMoneyCheckIcon,
  FaPaperPlaneIcon,
  FaPaperclipIcon,
  FaPasteIcon,
  FaPenIcon,
  FaPencilAltIcon,
  FaPhoneIcon,
  FaPhoneSlashIcon,
  FaPiggyBankIcon,
  FaPlaneIcon,
  FaPlayCircleIcon,
  FaPlayIcon,
  FaPlusCircleIcon,
  FaPlusIcon,
  FaPlusSquareIcon,
  FaPollHIcon,
  FaPollIcon,
  FaPortraitIcon,
  FaPowerOffIcon,
  FaPrintIcon,
  FaQrcodeIcon,
  FaQuestionCircleIcon,
  FaQuestionIcon,
  FaRandomIcon,
  FaReceiptIcon,
  FaRedoAltIcon,
  FaRedoIcon,
  FaRegDotCircleIcon,
  FaReplyAllIcon,
  FaReplyIcon,
  FaRocketIcon,
  FaSaveIcon,
  FaSearchIcon,
  FaSearchMinusIcon,
  FaSearchPlusIcon,
  FaShareAltIcon,
  FaShareIcon,
  FaShareSquareIcon,
  FaShieldAltIcon,
  FaShoppingBagIcon,
  FaShoppingBasketIcon,
  FaShoppingCartIcon,
  FaSignInAltIcon,
  FaSignOutAltIcon,
  FaSlidersHIcon,
  FaSortAlphaDownIcon,
  FaSortAlphaUpIcon,
  FaSortAmountDownIcon,
  FaSortAmountUpIcon,
  FaSortDownIcon,
  FaSortIcon,
  FaSortNumericDownIcon,
  FaSortNumericUpIcon,
  FaSortUpIcon,
  FaStarIcon,
  FaStepBackwardIcon,
  FaStepForwardIcon,
  FaStickyNoteIcon,
  FaStopCircleIcon,
  FaStopIcon,
  FaStreamIcon,
  FaSubwayIcon,
  FaSyncAltIcon,
  FaSyncIcon,
  FaTableIcon,
  FaTabletAltIcon,
  FaTabletIcon,
  FaTagIcon,
  FaTagsIcon,
  FaTasksIcon,
  FaTaxiIcon,
  FaThIcon,
  FaThLargeIcon,
  FaThListIcon,
  FaTimesCircleIcon,
  FaTimesIcon,
  FaToolboxIcon,
  FaToolsIcon,
  FaTrashAltIcon,
  FaTrashIcon,
  FaTrashRestoreAltIcon,
  FaTrashRestoreIcon,
  FaUndoAltIcon,
  FaUndoIcon,
  FaUnlinkIcon,
  FaUnlockAltIcon,
  FaUnlockIcon,
  FaUserAltIcon,
  FaUserAltSlashIcon,
  FaUserCheckIcon,
  FaUserCircleIcon,
  FaUserCogIcon,
  FaUserEditIcon,
  FaUserIcon,
  FaUserMinusIcon,
  FaUserPlusIcon,
  FaUserSlashIcon,
  FaUsersCogIcon,
  FaUsersIcon,
  FaVideoIcon,
  FaVideoSlashIcon,
  FaVolumeDownIcon,
  FaVolumeMuteIcon,
  FaVolumeOffIcon,
  FaVolumeUpIcon,
  FaWalletIcon,
  FaWindowCloseIcon,
  FaWindowMaximizeIcon,
  FaWindowMinimizeIcon,
  FaWindowRestoreIcon,
  FaWrenchIcon,
  FaYenSignIcon,
  Props,
} from './Icon'

const Wrapper = ({ children }: any) => <Container>{children}</Container>
const black = '#222'
const white = '#eee'

const componentMap: { [key in Props['name']]: React.ComponentType<ComponentProps> } = {
  'fa-address-book': FaAddressBookIcon,
  'fa-address-card': FaAddressCardIcon,
  'fa-angle-double-down': FaAngleDoubleDownIcon,
  'fa-angle-double-left': FaAngleDoubleLeftIcon,
  'fa-angle-double-right': FaAngleDoubleRightIcon,
  'fa-angle-down': FaAngleDownIcon,
  'fa-angle-left': FaAngleLeftIcon,
  'fa-angle-right': FaAngleRightIcon,
  'fa-angle-up': FaAngleUpIcon,
  'fa-archive': FaArchiveIcon,
  'fa-arrow-circle-down': FaArrowCircleDownIcon,
  'fa-arrow-alt-circle-down': FaArrowAltCircleDownIcon,
  'fa-arrow-alt-circle-left': FaArrowAltCircleLeftIcon,
  'fa-arrow-alt-circle-right': FaArrowAltCircleRightIcon,
  'fa-arrow-alt-circle-up': FaArrowAltCircleUpIcon,
  'fa-arrow-down': FaArrowDownIcon,
  'fa-arrow-left': FaArrowLeftIcon,
  'fa-arrow-right': FaArrowRightIcon,
  'fa-arrow-up': FaArrowUpIcon,
  'fa-arrows-alt': FaArrowsAltIcon,
  'fa-arrows-alt-h': FaArrowsAltHIcon,
  'fa-arrows-alt-v': FaArrowsAltVIcon,
  'fa-asterisk': FaAsteriskIcon,
  'fa-ban': FaBanIcon,
  'fa-bars': FaBarsIcon,
  'fa-bell': FaBellIcon,
  'fa-bell-slash': FaBellSlashIcon,
  'fa-birthday-cake': FaBirthdayCakeIcon,
  'fa-bolt': FaBoltIcon,
  'fa-book': FaBookIcon,
  'fa-book-open': FaBookOpenIcon,
  'fa-bookmark': FaBookmarkIcon,
  'fa-box': FaBoxIcon,
  'fa-box-open': FaBoxOpenIcon,
  'fa-boxes': FaBoxesIcon,
  'fa-briefcase': FaBriefcaseIcon,
  'fa-building': FaBuildingIcon,
  'fa-bullhorn': FaBullhornIcon,
  'fa-bus': FaBusIcon,
  'fa-bus-alt': FaBusAltIcon,
  'fa-business-time': FaBusinessTimeIcon,
  'fa-calculator': FaCalculatorIcon,
  'fa-calendar': FaCalendarIcon,
  'fa-calendar-alt': FaCalendarAltIcon,
  'fa-calendar-check': FaCalendarCheckIcon,
  'fa-calendar-day': FaCalendarDayIcon,
  'fa-calendar-minus': FaCalendarMinusIcon,
  'fa-calendar-plus': FaCalendarPlusIcon,
  'fa-calendar-times': FaCalendarTimesIcon,
  'fa-calendar-week': FaCalendarWeekIcon,
  'fa-camera': FaCameraIcon,
  'fa-car': FaCarIcon,
  'fa-car-alt': FaCarAltIcon,
  'fa-car-side': FaCarSideIcon,
  'fa-caret-down': FaCaretDownIcon,
  'fa-caret-left': FaCaretLeftIcon,
  'fa-caret-right': FaCaretRightIcon,
  'fa-caret-square-down': FaCaretSquareDownIcon,
  'fa-caret-square-left': FaCaretSquareLeftIcon,
  'fa-caret-square-right': FaCaretSquareRightIcon,
  'fa-caret-square-up': FaCaretSquareUpIcon,
  'fa-caret-up': FaCaretUpIcon,
  'fa-chart-area': FaChartAreaIcon,
  'fa-chart-bar': FaChartBarIcon,
  'fa-chart-line': FaChartLineIcon,
  'fa-chart-pie': FaChartPieIcon,
  'fa-check': FaCheckIcon,
  'fa-check-circle': FaCheckCircleIcon,
  'fa-check-square': FaCheckSquareIcon,
  'fa-chevron-circle-down': FaChevronCircleDownIcon,
  'fa-chevron-circle-left': FaChevronCircleLeftIcon,
  'fa-chevron-circle-right': FaChevronCircleRightIcon,
  'fa-chevron-circle-up': FaChevronCircleUpIcon,
  'fa-chevron-down': FaChevronDownIcon,
  'fa-chevron-left': FaChevronLeftIcon,
  'fa-chevron-right': FaChevronRightIcon,
  'fa-chevron-up': FaChevronUpIcon,
  'fa-circle': FaCircleIcon,
  'fa-clipboard': FaClipboardIcon,
  'fa-clipboard-check': FaClipboardCheckIcon,
  'fa-clipboard-list': FaClipboardListIcon,
  'fa-clock': FaClockIcon,
  'fa-clone': FaCloneIcon,
  'fa-cloud': FaCloudIcon,
  'fa-cloud-download-alt': FaCloudDownloadAltIcon,
  'fa-cloud-upload-alt': FaCloudUploadAltIcon,
  'fa-code': FaCodeIcon,
  'fa-cog': FaCogIcon,
  'fa-cogs': FaCogsIcon,
  'fa-coins': FaCoinsIcon,
  'fa-columns': FaColumnsIcon,
  'fa-comment': FaCommentIcon,
  'fa-comment-alt': FaCommentAltIcon,
  'fa-comment-dots': FaCommentDotsIcon,
  'fa-comment-slash': FaCommentSlashIcon,
  'fa-comments': FaCommentsIcon,
  'fa-compress': FaCompressIcon,
  'fa-copy': FaCopyIcon,
  'fa-credit-card': FaCreditCardIcon,
  'fa-cube': FaCubeIcon,
  'fa-cubes': FaCubesIcon,
  'fa-database': FaDatabaseIcon,
  'fa-door-closed': FaDoorClosedIcon,
  'fa-door-open': FaDoorOpenIcon,
  'fa-edit': FaEditIcon,
  'fa-ellipsis-h': FaEllipsisHIcon,
  'fa-ellipsis-v': FaEllipsisVIcon,
  'fa-envelope': FaEnvelopeIcon,
  'fa-envelope-open': FaEnvelopeOpenIcon,
  'fa-envelope-open-text': FaEnvelopeOpenTextIcon,
  'fa-exchange-alt': FaExchangeAltIcon,
  'fa-exclamation': FaExclamationIcon,
  'fa-exclamation-circle': FaExclamationCircleIcon,
  'fa-exclamation-triangle': FaExclamationTriangleIcon,
  'fa-expand': FaExpandIcon,
  'fa-expand-arrows-alt': FaExpandArrowsAltIcon,
  'fa-external-link-alt': FaExternalLinkAltIcon,
  'fa-eye': FaEyeIcon,
  'fa-eye-slash': FaEyeSlashIcon,
  'fa-file': FaFileIcon,
  'fa-file-alt': FaFileAltIcon,
  'fa-file-archive': FaFileArchiveIcon,
  'fa-file-download': FaFileDownloadIcon,
  'fa-file-export': FaFileExportIcon,
  'fa-file-import': FaFileImportIcon,
  'fa-file-upload': FaFileUploadIcon,
  'fa-filter': FaFilterIcon,
  'fa-flag': FaFlagIcon,
  'fa-folder': FaFolderIcon,
  'fa-folder-minus': FaFolderMinusIcon,
  'fa-folder-open': FaFolderOpenIcon,
  'fa-folder-plus': FaFolderPlusIcon,
  'fa-font': FaFontIcon,
  'fa-forward': FaForwardIcon,
  'fa-gift': FaGiftIcon,
  'fa-globe': FaGlobeIcon,
  'fa-graduation-cap': FaGraduationCapIcon,
  'fa-grip-horizontal': FaGripHorizontalIcon,
  'fa-grip-lines': FaGripLinesIcon,
  'fa-grip-lines-vertical': FaGripLinesVerticalIcon,
  'fa-grip-vertical': FaGripVerticalIcon,
  'fa-hand-paper': FaHandPaperIcon,
  'fa-hand-point-down': FaHandPointDownIcon,
  'fa-hand-point-left': FaHandPointLeftIcon,
  'fa-hand-point-right': FaHandPointRightIcon,
  'fa-hand-point-up': FaHandPointUpIcon,
  'fa-hands': FaHandsIcon,
  'fa-handshake': FaHandshakeIcon,
  'fa-heart': FaHeartIcon,
  'fa-history': FaHistoryIcon,
  'fa-home': FaHomeIcon,
  'fa-hospital': FaHospitalIcon,
  'fa-hospital-alt': FaHospitalAltIcon,
  'fa-hourglass': FaHourglassIcon,
  'fa-hourglass-end': FaHourglassEndIcon,
  'fa-hourglass-half': FaHourglassHalfIcon,
  'fa-hourglass-start': FaHourglassStartIcon,
  'fa-id-badge': FaIdBadgeIcon,
  'fa-id-card': FaIdCardIcon,
  'fa-id-card-alt': FaIdCardAltIcon,
  'fa-image': FaImageIcon,
  'fa-images': FaImagesIcon,
  'fa-inbox': FaInboxIcon,
  'fa-info': FaInfoIcon,
  'fa-info-circle': FaInfoCircleIcon,
  'fa-key': FaKeyIcon,
  'fa-keyboard': FaKeyboardIcon,
  'fa-lightbulb': FaLightbulbIcon,
  'fa-link': FaLinkIcon,
  'fa-list': FaListIcon,
  'fa-list-alt': FaListAltIcon,
  'fa-list-ol': FaListOlIcon,
  'fa-list-ul': FaListUlIcon,
  'fa-lock': FaLockIcon,
  'fa-lock-open': FaLockOpenIcon,
  'fa-long-arrow-alt-down': FaLongArrowAltDownIcon,
  'fa-long-arrow-alt-left': FaLongArrowAltLeftIcon,
  'fa-long-arrow-alt-right': FaLongArrowAltRightIcon,
  'fa-long-arrow-alt-up': FaLongArrowAltUpIcon,
  'fa-minus': FaMinusIcon,
  'fa-minus-circle': FaMinusCircleIcon,
  'fa-minus-square': FaMinusSquareIcon,
  'fa-mobile': FaMobileIcon,
  'fa-mobile-alt': FaMobileAltIcon,
  'fa-money-bill': FaMoneyBillIcon,
  'fa-money-bill-alt': FaMoneyBillAltIcon,
  'fa-money-bill-wave': FaMoneyBillWaveIcon,
  'fa-money-bill-wave-alt': FaMoneyBillWaveAltIcon,
  'fa-money-check': FaMoneyCheckIcon,
  'fa-money-check-alt': FaMoneyCheckAltIcon,
  'fa-paper-plane': FaPaperPlaneIcon,
  'fa-paperclip': FaPaperclipIcon,
  'fa-paste': FaPasteIcon,
  'fa-pen': FaPenIcon,
  'fa-pencil-alt': FaPencilAltIcon,
  'fa-phone': FaPhoneIcon,
  'fa-phone-slash': FaPhoneSlashIcon,
  'fa-piggy-bank': FaPiggyBankIcon,
  'fa-plane': FaPlaneIcon,
  'fa-play': FaPlayIcon,
  'fa-play-circle': FaPlayCircleIcon,
  'fa-plus': FaPlusIcon,
  'fa-plus-circle': FaPlusCircleIcon,
  'fa-plus-square': FaPlusSquareIcon,
  'fa-poll': FaPollIcon,
  'fa-poll-h': FaPollHIcon,
  'fa-portrait': FaPortraitIcon,
  'fa-power-off': FaPowerOffIcon,
  'fa-print': FaPrintIcon,
  'fa-qrcode': FaQrcodeIcon,
  'fa-question': FaQuestionIcon,
  'fa-question-circle': FaQuestionCircleIcon,
  'fa-random': FaRandomIcon,
  'fa-receipt': FaReceiptIcon,
  'fa-redo': FaRedoIcon,
  'fa-redo-alt': FaRedoAltIcon,
  'fa-reg-dot-circle': FaRegDotCircleIcon,
  'fa-reply': FaReplyIcon,
  'fa-reply-all': FaReplyAllIcon,
  'fa-rocket': FaRocketIcon,
  'fa-save': FaSaveIcon,
  'fa-search': FaSearchIcon,
  'fa-search-minus': FaSearchMinusIcon,
  'fa-search-plus': FaSearchPlusIcon,
  'fa-share': FaShareIcon,
  'fa-share-alt': FaShareAltIcon,
  'fa-share-square': FaShareSquareIcon,
  'fa-shield-alt': FaShieldAltIcon,
  'fa-shopping-bag': FaShoppingBagIcon,
  'fa-shopping-basket': FaShoppingBasketIcon,
  'fa-shopping-cart': FaShoppingCartIcon,
  'fa-sign-in-alt': FaSignInAltIcon,
  'fa-sign-out-alt': FaSignOutAltIcon,
  'fa-sliders-h': FaSlidersHIcon,
  'fa-sort': FaSortIcon,
  'fa-sort-alpha-down': FaSortAlphaDownIcon,
  'fa-sort-alpha-up': FaSortAlphaUpIcon,
  'fa-sort-amount-down': FaSortAmountDownIcon,
  'fa-sort-amount-up': FaSortAmountUpIcon,
  'fa-sort-down': FaSortDownIcon,
  'fa-sort-numeric-down': FaSortNumericDownIcon,
  'fa-sort-numeric-up': FaSortNumericUpIcon,
  'fa-sort-up': FaSortUpIcon,
  'fa-star': FaStarIcon,
  'fa-step-backward': FaStepBackwardIcon,
  'fa-step-forward': FaStepForwardIcon,
  'fa-sticky-note': FaStickyNoteIcon,
  'fa-stop': FaStopIcon,
  'fa-stop-circle': FaStopCircleIcon,
  'fa-stream': FaStreamIcon,
  'fa-subway': FaSubwayIcon,
  'fa-sync': FaSyncIcon,
  'fa-sync-alt': FaSyncAltIcon,
  'fa-table': FaTableIcon,
  'fa-tablet': FaTabletIcon,
  'fa-tablet-alt': FaTabletAltIcon,
  'fa-tag': FaTagIcon,
  'fa-tags': FaTagsIcon,
  'fa-task': FaTasksIcon,
  'fa-taxi': FaTaxiIcon,
  'fa-th': FaThIcon,
  'fa-th-large': FaThLargeIcon,
  'fa-th-list': FaThListIcon,
  'fa-times': FaTimesIcon,
  'fa-times-circle': FaTimesCircleIcon,
  'fa-toolbox': FaToolboxIcon,
  'fa-tools': FaToolsIcon,
  'fa-trash': FaTrashIcon,
  'fa-trash-alt': FaTrashAltIcon,
  'fa-trash-restore': FaTrashRestoreIcon,
  'fa-trash-restore-alt': FaTrashRestoreAltIcon,
  'fa-undo': FaUndoIcon,
  'fa-undo-alt': FaUndoAltIcon,
  'fa-unlink': FaUnlinkIcon,
  'fa-unlock': FaUnlockIcon,
  'fa-unlock-alt': FaUnlockAltIcon,
  'fa-user': FaUserIcon,
  'fa-user-alt': FaUserAltIcon,
  'fa-user-alt-slash': FaUserAltSlashIcon,
  'fa-user-check': FaUserCheckIcon,
  'fa-user-circle': FaUserCircleIcon,
  'fa-user-cog': FaUserCogIcon,
  'fa-user-edit': FaUserEditIcon,
  'fa-user-minus': FaUserMinusIcon,
  'fa-user-plus': FaUserPlusIcon,
  'fa-user-slash': FaUserSlashIcon,
  'fa-users': FaUsersIcon,
  'fa-users-cog': FaUsersCogIcon,
  'fa-video': FaVideoIcon,
  'fa-video-slash': FaVideoSlashIcon,
  'fa-volume-down': FaVolumeDownIcon,
  'fa-volume-mute': FaVolumeMuteIcon,
  'fa-volume-off': FaVolumeOffIcon,
  'fa-volume-up': FaVolumeUpIcon,
  'fa-wallet': FaWalletIcon,
  'fa-window-close': FaWindowCloseIcon,
  'fa-window-maximize': FaWindowMaximizeIcon,
  'fa-window-minimize': FaWindowMinimizeIcon,
  'fa-window-restore': FaWindowRestoreIcon,
  'fa-wrench': FaWrenchIcon,
  'fa-yen-sign': FaYenSignIcon,
}

const getIconList = (bg: string, color?: string, role?: string) =>
  Object.entries(componentMap).map(([name, Component]) => {
    return (
      <>
        <IconWrap key={`${color}-${name}`} bg={bg}>
          <Component color={color} role={role && role} />
          <IconName $color={color}>{name}</IconName>
        </IconWrap>
      </>
    )
  })

storiesOf('Icon', module)
  .add('white', () => <Wrapper>{getIconList(black, white)}</Wrapper>)
  .add('black', () => <Wrapper>{getIconList(white, black)}</Wrapper>)
  .add('default', () => <Wrapper>{getIconList(white)}</Wrapper>)
  .add('change role', () => <Wrapper>{getIconList(white, black, 'figure')}</Wrapper>)

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`
const IconWrap: any = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: ${({ bg }: any) => bg};
  text-align: center;
`
const IconName = styled.p<{ $color?: string }>`
  margin-top: 10px;
  font-size: 14px;
  ${({ $color }) => {
    return css`
      ${$color && `color: ${$color};`}
    `
  }}
`
