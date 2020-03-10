const fs = require('fs')

const RAW_FILE_PATH = './raw.txt'
const BACKUP_PATH = './backup'

;(async () => {
  if (!(await fs.existsSync(BACKUP_PATH))) {
    await fs.mkdirSync(BACKUP_PATH)
  }

  const file = await fs.readFileSync(RAW_FILE_PATH, 'utf-8')
  const data = JSON.parse(JSON.parse(file))

  const all = JSON.parse(data['QUESTION_PICKER:All Problems'])
  const allMap = all.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.questionId]: cur,
    }),
    {},
  )

  for (const key in data) {
    const match = key.match(/(?<questionId>\d+)_(?<d>\d+)_(?<language>\w+)/i)

    const element = data[key]
    if (match) {
      const { questionId, language } = match.groups
      const ext = getExtension(language)
      const { titleSlug, questionFrontendId } = allMap[questionId] || {}

      if (Number.isNaN(Number(element)) && !!ext && !!titleSlug) {
        const result = element
          .replace(/\\n/g, '\r\n')
          .replace(/^"/g, '')
          .replace(/"$/g, '')
          .replace(/\\"/g, '"')
          .replace(/    /g, '  ')

        await fs.writeFileSync(
          `${BACKUP_PATH}/${questionFrontendId}-${titleSlug}.${ext}`,
          result,
          'utf-8',
        )
      } else {
        console.log('unsupported languages')
      }
    } else {
      console.log('other data', key)
    }
  }
})()

function getExtension(language) {
  switch (language) {
    case 'javascript':
      return 'js'
    case 'python':
    case 'python3':
    default:
      return undefined
  }
}
