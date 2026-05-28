// api/contact.ts  — Vercel serverless function
// Deploy as-is; set env vars in Vercel dashboard:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import nodemailer from 'nodemailer';
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, message, emailRe, transporter, err_1;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (req.method !== 'POST') {
                        return [2 /*return*/, res.status(405).json({ error: 'Method not allowed' })];
                    }
                    _a = req.body, name = _a.name, email = _a.email, message = _a.message;
                    if (!name || !email || !message) {
                        return [2 /*return*/, res.status(400).json({ error: 'All fields are required' })];
                    }
                    emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRe.test(email)) {
                        return [2 /*return*/, res.status(400).json({ error: 'Invalid email address' })];
                    }
                    transporter = nodemailer.createTransport({
                        host: process.env.SMTP_HOST,
                        port: Number((_b = process.env.SMTP_PORT) !== null && _b !== void 0 ? _b : 587),
                        secure: false,
                        auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS,
                        },
                    });
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, transporter.sendMail({
                            from: "\"Portfolio Contact\" <".concat(process.env.SMTP_USER, ">"),
                            to: (_c = process.env.CONTACT_TO) !== null && _c !== void 0 ? _c : 'marius.obreja9@gmail.com',
                            replyTo: email,
                            subject: "Portfolio enquiry from ".concat(name),
                            text: "Name: ".concat(name, "\nEmail: ").concat(email, "\n\n").concat(message),
                            html: "\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n        <hr />\n        <p>").concat(message.replace(/\n/g, '<br />'), "</p>\n      "),
                        })];
                case 2:
                    _d.sent();
                    return [2 /*return*/, res.status(200).json({ success: true })];
                case 3:
                    err_1 = _d.sent();
                    console.error('Mail send error:', err_1);
                    return [2 /*return*/, res.status(500).json({ error: 'Failed to send email' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
