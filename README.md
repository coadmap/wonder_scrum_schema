# WonderScrum GraphQL Schema

## 全体方針
Relayの仕様に沿う

## モックの動かし方について
- **癖があるので読んでください**
- 依存関係にあるパッケージのバージョンを無理やり上げてshrinkwrapしてるので、実行は以下のコマンドで行う
```sh
$ npm ci # iではなくci, 初回 or 依存関係の更新があった場合のみ
$ npm run mock:start
```

## スキーマの命名などについて

### Payload(戻り値型)
[graphql-ruby]()の仕様で、Mutationを定義すると `[MutationName]Payload` という戻り値型が自動で定義されてしまうので、bodyの内容が同じでも、
明示的に
* CreateTaskPayload
* UpdateTaskPayload
* DeleteTaskPayload
のように戻り値型を定義する
それぞれ、その中身は
```graphql
# こっちはEntity
type Hoge {
    id: ID!
    # あとはいろいろ
}

# こっちが戻り値型の定義
type CreateHogePayload {
    hoge: Hoge
}
```
というように値がラップされたものになる。

## 想定しているER図
![ER図](https://user-images.githubusercontent.com/12053974/106880866-39b96d80-6720-11eb-906a-17f90e8f231d.jpeg)
