import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, 'src', 'components', 'screens')

const files = fs.readdirSync(dir)

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file)
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/import \{ useRouter \} from "next\/navigation"/g, 'import { useNavigate } from "react-router-dom"')
    content = content.replace(/const router = useRouter\(\)/g, 'const navigate = useNavigate()')
    content = content.replace(/router\.push\(/g, 'navigate(')
    fs.writeFileSync(filePath, content)
  }
}
