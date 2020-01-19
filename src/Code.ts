import TextOutput = GoogleAppsScript.Content.TextOutput;
import { toTextOutput } from "./gas";

export function doPost(): TextOutput {
    const result = doProcess();
    return toTextOutput({ result: result });
}

function doProcess(): string {
    let text = "doProcess executed!";
    console.log(text);
    return text;
}
