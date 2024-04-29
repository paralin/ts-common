// @generated by protoc-gen-es-lite unknown with parameter "target=ts,ts_nocheck=false"
// @generated from file github.com/aperturerobotics/common/example/example.proto (package example, syntax proto3)
/* eslint-disable */

import type { MessageType, PartialFieldInfo } from '@aptre/protobuf-es-lite'
import { createMessageType, Message } from '@aptre/protobuf-es-lite'
import { OtherMsg } from './other/other.pb.js'

export const protobufPackage = 'example'

/**
 * ExampleMsg is an example message.
 *
 * @generated from message example.ExampleMsg
 */
export type ExampleMsg = Message<{
  /**
   * ExampleField is an example field.
   *
   * @generated from field: string example_field = 1;
   */
  exampleField?: string
  /**
   * OtherMsg is an example of an imported message field.
   *
   * @generated from field: example.other.OtherMsg other_msg = 2;
   */
  otherMsg?: OtherMsg
}>

export const ExampleMsg: MessageType<ExampleMsg> = createMessageType({
  typeName: 'example.ExampleMsg',
  fields: [
    {
      no: 1,
      name: 'example_field',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: 'other_msg', kind: 'message', T: () => OtherMsg },
  ] as readonly PartialFieldInfo[],
  packedByDefault: true,
})
