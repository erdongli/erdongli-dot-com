export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <pre>{
`package main

import (
  "bufio"
  "fmt"
  "os"
  "strings"
)

func main() {
  reader := bufio.NewReader(os.Stdin)

  for {
    cmd, err := reader.ReadString('\\n')
    if err != nil {
      panic(err)
    }
    cmd = strings.Replace(cmd, "\\n", "", -1)

    switch cmd {
    case "github":
      fmt.Println("https://github.com/erdongli")
    case "linkedin":
      fmt.Println("https://www.linkedin.com/in/erdong-li-3063527b")
    default:
      fmt.Println("404 - Page Not Found")
    }
  }
}`
      }</pre>
    </div>
  )
}
