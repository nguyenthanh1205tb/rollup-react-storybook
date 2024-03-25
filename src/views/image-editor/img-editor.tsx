/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuImgEditorType } from '@/src/types'
import React, { useEffect } from 'react'
import { default as ImageEditor, default as tui } from 'tui-image-editor'
import 'tui-image-editor/dist/tui-image-editor.css'

interface ImageEditorProps {
  initMenu?: MenuImgEditorType
  src: string
  getInstance?: (i: any) => void
}
ImageEditor
const myTheme: any = {
  'header.display': 'none',
}

const BaseImageEditor = ({ initMenu, src, getInstance }: ImageEditorProps) => {
  const [instant, setInstant] = React.useState<ImageEditor>()

  const imgEditorProps: tuiImageEditor.IOptions = {
    includeUI: {
      menuBarPosition: 'left',
      usageStatistics: false,
      // menu: ['shape', 'filter', 'text', 'mask', 'icon', 'draw', 'crop', 'flip', 'rotate', 'reset'],
      theme: myTheme,
      initMenu: initMenu || 'rotate',
      // initMenu: 'shape',
      uiSize: {
        height: '700px',
        width: '100%',
      },
    },
    selectionStyle: {
      rotatingPointOffset: 70,
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
  }

  useEffect(() => {
    // const editorInstance: ImageEditorClass = ref?.current?.getInstance()

    const imageEditor = new tui('#tui-image-editor-container', {
      ...imgEditorProps,
      includeUI: {
        ...imgEditorProps.includeUI,
        loadImage: {
          path: src,
          name: 'mefi-package',
        },
      },
    })

    setInstant(imageEditor)
    getInstance && getInstance(imageEditor)

    imageEditor.changeCursor('default')
  }, [])

  // return <ImageEditor ref={ref} {...imgEditorProps} />
  return <div id="tui-image-editor-container"></div>
}

export default BaseImageEditor
