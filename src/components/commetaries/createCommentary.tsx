import React, { useCallback, useState } from "react";
import Form from "form-with-state";

interface iformdata {
  content: string;
}
interface iprops {
  postCommentary: (formdata: any) => Promise<void>;
}

export const CreateCommentary = ({ postCommentary }: iprops) => {
  const [error, setError] = useState("");
  const handlePost = useCallback(async (data: any) => {
    setError("")
    try {
      await postCommentary(data);
    } catch (error) {
      setError("Error: contact to administrator");
    }
  }, [postCommentary])

  return (
    <div>
      <div className="create-wrapper">
        <Form className="form-content" initialState={{}} onSubmit={handlePost}>
          <>
            {error && <span className="form-error">{error}</span>}
            <Form.TextArea required name="content" />
            <Form.Submit
              name="send"
              label="Enviar"
              style={{
                backgroundColor: "var(--primary)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1.25rem",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.85rem",
                width: 100,
              }}
            />
          </>
        </Form>
      </div>
      <style jsx>{`
        .create-wrapper {
          margin-top: 0.5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .create-wrapper :global(.form-content) {
          display: grid;
          grid-template-areas:
            "content content content content content"
            "send . . . .";
          gap: 0.5rem;
        }
        .create-wrapper :global(textarea) {
          grid-area: content;
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 8px;
          color: #e2e8f0;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-family: inherit;
          resize: vertical;
          min-height: 80px;
          transition: border-color 0.2s ease;
          outline: none;
        }
        .create-wrapper :global(textarea:focus) {
          border-color: rgba(99, 102, 241, 0.5);
        }
        .form-error {
          color: #ef4444;
          font-size: 0.82rem;
        }
      `}</style>
    </div>
  );
}
