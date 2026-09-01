import type { NavigationMenuItem } from '@nuxt/ui'

/** 首頁一頁式的區塊錨點，header 選單與手機選單共用 */
export const homeSectionLinks: NavigationMenuItem[] = [
  { label: '專案', to: '/#projects' },
  { label: '自主開發', to: '/#side-projects' },
  { label: '經歷', to: '/#experience' },
  { label: '關於', to: '/#about' },
  { label: '筆記', to: '/interview/1-1.interview_qlist' },
]

/** 履歷檔案位置，放在 public/ 底下 */
export const resumeUrl = '/resume.pdf'

/** 履歷 PDF 準備好之前先隱藏下載入口 */
export const showResume = false
