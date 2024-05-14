import React from "react";
import { Editor } from "@tiptap/react";
import ToggleComp from "@/app/components/Toggle";
import {
  FontItalicIcon,
  FontBoldIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";
import NumberBullet from "@/app/components/icons/NumberBullet";

function ToolBar({ editor }) {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex gap-2 my-2 rounded">
      <ToggleComp
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        icon={<FontBoldIcon />}
      />
      <ToggleComp
        pressed={editor.isActive("bulletList") ? "is-active" : ""}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        icon={<ListBulletIcon />}
      />
      <ToggleComp
        pressed={editor.isActive("orderedList") ? "is-active" : ""}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        icon={<NumberBullet />}
      />
    </div>
  );
}

export default ToolBar;
