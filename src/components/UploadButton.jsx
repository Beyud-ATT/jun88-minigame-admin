import React, { useState } from "react";
import { readExcelFile } from "../utils/helper";

const ExcelFileReader = ({ onFileRead }) => {
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const [postBody, setPostBody] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    setError("");
    setFileName(file.name);

    try {
      const data = await readExcelFile(file);
      setFileData(data);
      onFileRead(data);

      // Create POST request body
      // const requestBody = JSON.stringify(
      //   {
      //     questions: data,
      //     metadata: {
      //       fileName: file.name,
      //       totalQuestions: data.length,
      //       uploadedAt: new Date().toISOString(),
      //     },
      //   },
      //   null,
      //   2,
      // );

      // setPostBody(requestBody);
    } catch (err) {
      setError(`Error reading file: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(postBody);
  //   alert("POST body copied to clipboard!");
  // };

  // const sendPostRequest = async () => {
  //   if (!postBody) return;

  //   try {
  //     // Example POST request - modify URL and headers as needed
  //     const response = await fetch("/api/upload-questions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: postBody,
  //     });

  //     if (response.ok) {
  //       alert("Data sent successfully!");
  //     } else {
  //       alert("Failed to send data");
  //     }
  //   } catch (err) {
  //     alert(`Error sending request: ${err.message}`);
  //   }
  // };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Chọn File Excel</h1>

      {/* File Input */}
      <div className="mb-6">
        <label className="block">
          <div className="inline-block cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white transition-shadow duration-200 hover:shadow-lg">
            {isLoading ? "Đang đọc file..." : "Chọn file"}
          </div>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
            disabled={isLoading}
          />
        </label>
      </div>

      {/* File Info */}
      {fileName && (
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-blue-800">
            <strong>Tên file:</strong> {fileName}
            {fileData && (
              <span className="ml-4">
                <strong>Số câu hỏi:</strong> {fileData.length}
              </span>
            )}
          </p>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* POST Body Output */}
      {/* {postBody && (
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">
              POST Request Body:
            </h3>
            <div className="space-x-2">
              <button
                onClick={copyToClipboard}
                className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
              >
                Copy JSON
              </button>
              <button
                onClick={sendPostRequest}
                className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Send POST Request
              </button>
            </div>
          </div>
          <pre className="max-h-96 overflow-auto rounded-lg border bg-gray-100 p-4 font-mono text-sm">
            {postBody}
          </pre>
        </div>
      )} */}

      {/* Data Preview */}
      {fileData && fileData.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-700">
            Dữ liệu tham khảo (3 câu hỏi đầu tiên):
          </h3>
          <div className="space-y-4">
            {fileData.slice(0, 3).map((question, index) => (
              <div key={index} className="rounded-lg border bg-gray-50 p-4">
                <h4 className="mb-2 font-medium text-gray-800">
                  Q{index + 1}: {question.question}
                </h4>
                <div className="mb-2 text-sm text-gray-600">
                  Category: {question.category} | Difficulty:{" "}
                  {question.difficulty} | Type: {question.type}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {question.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`rounded p-2 text-sm ${option.isCorrect ? "bg-green-100 text-green-800" : "bg-white"}`}
                    >
                      {option.text} {option.isCorrect && "✓"}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelFileReader;
