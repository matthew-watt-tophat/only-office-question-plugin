/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// Example insert text into editors (different implementations)

// import { QuestionPreview } from './node_modules/@thm/fe-question/lib/index.js';
import { THDate } from '@thm/fe-dates';
// import { THDate } from 'http://192.168.0.232/sdkjs-plugins/tophatquestion/node_modules/@thm/fe-dates/lib/index.js';

(function(window, undefined){

    window.Asc.plugin.init = function()
    {
        // serialize command as text
        // var sScript = `
        //     var oDocument = Api.GetDocument();
        //     oParagraph = Api.CreateParagraph();
        //     oParagraph.AddText('Hello world??');
        //     oDocument.InsertContent([oParagraph]);
        // `;
        // this.info.recalculate = true;
        // this.executeCommand("close", sScript);
        console.log("hello 123")
        window.Asc.plugin.callCommand(function() {
            let currentDate = THDate.now()
            console.log(currentDate)
            // console.log(QuestionPreview)
            // let question = (<QuestionPreview
            //     question={{
            //         choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
            //         correctAnswers: ['Choice 1'],
            //         customData: {
            //             allCorrect: false,
            //         },
            //         hasCorrectAnswer: true,
            //         id: '1',
            //         itemId: '1',
            //         question: 'This is the Question text',
            //         questionType:'mc',
            //         title:  'Question Title',
            //         type: 'question',
            //     }}
            // />)
            // console.log(question)
            console.log("action")
            // let oDocument = Api.GetDocument();
            // oParagraph = oDocument.GetElement(0);

            // arrField = ["Greeting line", "First name", "Last name"];
            // for (let i = 0; i < 3; i++) {
            //     oRun = Api.CreateRun();
            //     oRun.AddText(arrField[i]);
            //     oParagraph.AddElement(oRun);
            //     oRun.WrapInMailMergeField();
            //     oParagraph.AddText(" ");
            // }
            // oParagraph.AddText("!");
            // window.Asc.plugin.executeMethod("PasteText", "pasted text")
            // Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
            // Api.MailMerge();
        });
        // builder.SaveFile("docx", "LoadMailMergeData.docx");
        // builder.CloseFile();
    };

})(window, undefined);


// builder.CreateFile("docx");
// oDocument = Api.GetDocument();
// oParagraph = oDocument.GetElement(0);
// arrField = ["Greeting line", "First name", "Last name"];
// for (let i = 0; i < 3; i++) {
//     oRun = Api.CreateRun();
//     oRun.AddText(arrField[i]);
//     oParagraph.AddElement(oRun);
//     oRun.WrapInMailMergeField();
//     oParagraph.AddText(" ");
// }
// oParagraph.AddText("!");
// Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
// Api.MailMerge();
// builder.SaveFile("docx", "LoadMailMergeData.docx");
// builder.CloseFile();