import { useEffect, useRef } from "react";
import { recordId, records } from "./content/cases";
import { Cmd } from "./ui";

interface Props {
  open: boolean;
  onClose: () => void;
  enabled: boolean;
  onToggleEnabled: () => void;
}

/** Native modal <dialog>: focus is trapped, Esc closes, focus returns to whatever opened it. */
export default function ShortcutsDialog({ open, onClose, enabled, onToggleEnabled }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      opener.current = document.activeElement as HTMLElement | null;
      d.showModal();
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  const first = recordId(records[0]);
  const last = recordId(records[Math.min(4, records.length - 1)]);

  return (
    <dialog
      ref={ref}
      className="tb-keys"
      aria-labelledby="tb-keys-title"
      onClose={() => {
        onClose();
        opener.current?.focus?.();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="tb-keys-inner">
        <div className="tb-keys-head">
          <h2 id="tb-keys-title">Keyboard shortcuts</h2>
          <button type="button" className="tb-keys-close" onClick={onClose}>
            <Cmd>Close</Cmd>
          </button>
        </div>
        <dl className="tb-keys-list">
          <div>
            <dt>
              <kbd>1</kbd>–<kbd>5</kbd>
            </dt>
            <dd>
              Open record {first} to {last}
            </dd>
          </div>
          <div>
            <dt>
              <kbd>H</kbd> or <kbd>G</kbd> <kbd>H</kbd>
            </dt>
            <dd>Home</dd>
          </div>
          <div>
            <dt>
              <kbd>M</kbd>
            </dt>
            <dd>Pause or resume motion</dd>
          </div>
          <div>
            <dt>
              <kbd>?</kbd>
            </dt>
            <dd>Show or hide this panel</dd>
          </div>
          <div>
            <dt>
              <kbd>Esc</kbd>
            </dt>
            <dd>Close panel or menu</dd>
          </div>
        </dl>
        <div className="tb-keys-toggle">
          <span id="tb-keys-toggle-label">Single-key shortcuts</span>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            aria-labelledby="tb-keys-toggle-label"
            className="tb-switch"
            onClick={onToggleEnabled}
          >
            <span aria-hidden="true">{enabled ? "On" : "Off"}</span>
          </button>
        </div>
      </div>
    </dialog>
  );
}
