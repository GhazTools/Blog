import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import code_block_theme from "../config/code_block_theme";

import "../markdown_styles.css";

interface MarkdownProcessorProps {
    markdown: string;
}

// Function to copy text to clipboard
const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text).then(
        () => {
            // Optional: Display a message or change the button appearance temporarily
            console.log("Text copied to clipboard");
        },
        (err) => {
            console.error("Could not copy text: ", err);
        },
    );
};

function MarkdownProcessor({ markdown }: MarkdownProcessorProps) {
    return (
        <Markdown
            components={{
                h1: ({ node, ...props }) => (
                    <h1 className="markdown_h1" {...props} />
                ),
                h2: ({ node, ...props }) => (
                    <h2 className="markdown_h2" {...props} />
                ),
                h3: ({ node, ...props }) => (
                    <h3 className="markdown_h3" {...props} />
                ),
                // REGULAR TEXT
                p: ({ node, ...props }) => (
                    <p className="markdown_text" {...props} />
                ),
                // ITALICIZE HERE
                em: ({ node, ...props }) => (
                    <em className="markdown_italic" {...props} />
                ),
                // Customization for bold
                strong: ({ node, ...props }) => (
                    <strong className="markdown_bold" {...props} />
                ),
                // Customization for unordered lists
                ul: ({ node, ...props }) => (
                    <ul className="markdown_unordered_list" {...props} />
                ),
                // Customization for ordered lists
                ol: ({ node, ...props }) => (
                    <ol className="markdown_ordered_list" {...props} />
                ),
                // Customization for blockquote
                blockquote: ({ node, ...props }) => (
                    <blockquote className="markdown_blockquote" {...props} />
                ),
                // Customization for horizontal rule (hr)
                hr: ({ node, ...props }) => (
                    <hr className="markdown_horizontal_rule" {...props} />
                ),

                // Customization for links (a)
                a: ({ node, ...props }) => (
                    <a className="markdown_link" {...props} />
                ),
                img: (image) => {
                    // Extract the original src attribute
                    const originalSrc = image.src;
                    console.log(originalSrc);

                    // Determine if the src is a URL or a local path
                    const isUrl = originalSrc?.includes("http");

                    // Use updatedSrc for local paths, originalSrc for URLs
                    const src = isUrl
                        ? originalSrc
                        : `/server_images/${originalSrc}`;

                    // Return a new img element with the appropriate src
                    return <img {...image} src={src} />;
                },
                code: ({ node, className, children, ...props }) => {
                    console.log("TEST", props);

                    const match = /language-(\w+)/.exec(className || "");
                    if (match) {
                        return (
                            <div
                                style={{
                                    position: "relative",
                                    padding: "20px",
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        left: "20px",

                                        // top: "30px",
                                        backgroundColor: "#66a2fb", // Light background for the language label
                                        padding: "0 15px",
                                        borderRadius: "10px",
                                        fontSize: "0.75rem", // Smaller font size for the language label
                                        color: "#333333", // Text color for the language label
                                    }}
                                >
                                    {match[1]}
                                </span>
                                <button
                                    style={{
                                        position: "absolute",
                                        right: "20px",
                                        top: "5px",
                                    }}
                                    onClick={() =>
                                        copyToClipboard(
                                            String(children).replace(/\n$/, ""),
                                        )
                                    }
                                >
                                    Copy
                                </button>
                                <SyntaxHighlighter
                                    style={{
                                        ...code_block_theme,
                                        padding: "20px",
                                    }}
                                    language={match[1]}
                                    PreTag="div"
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        );
                    } else {
                        return (
                            <div style={{ position: "relative" }}>
                                <button
                                    style={{
                                        position: "absolute",
                                        padding: "20px",
                                        right: "5px",
                                        top: "5px",
                                    }}
                                    onClick={() => copyToClipboard(children)}
                                >
                                    Copy
                                </button>
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            </div>
                        );
                    }
                },
            }}
        >
            {markdown}
        </Markdown>
    );
}

export default MarkdownProcessor;
