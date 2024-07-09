import { useParams } from "react-router-dom";
function MarkdownRequester() {
    const { markdownFilename } = useParams<{ markdownFilename: string }>();

    const fileExists = false;

    console.log("markdown file name: " + markdownFilename);
    if (!fileExists) {
        return (
            <div>
                <h1>404 Not Found</h1>
                <p>The requested markdown file does not exist.</p>
            </div>
        );
    }

    return <div></div>;
}

export default MarkdownRequester;
