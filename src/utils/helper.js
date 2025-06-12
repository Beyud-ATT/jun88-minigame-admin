import * as XLSX from "xlsx";

const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);

        // Validate data
        const validatedData = jsonData
          .map((row) => {
            if (!row.question || row?.question.trim() === "") return null;

            const correctAnswers = (row.answercorrect || "")
              .split(",")
              .map((ans) => ans.trim());

            const options = ["answer1", "answer2", "answer3", "answer4"]
              .map((key) => ({
                text: row[key],
                isCorrect: correctAnswers.includes(key),
                statusType: 1,
              }))
              .filter((opt) => opt.text);

            return {
              site: import.meta.env.VITE_SITE,
              question: row.question.trim(),
              category: Number(row.category) || 1,
              difficulty: row.difficulty || "easy",
              type: row.type || "single",
              options,
              image: row.image || null,
            };
          })
          .filter(Boolean);

        resolve(validatedData);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

export { readExcelFile };
