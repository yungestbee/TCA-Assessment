const Result = require("../../models/result");
// const errorHandler = require("../middlewares/handleError");
require("dotenv").config();

class ResultController {
  static async create(req, res) {
    try {
      let {name, school, score } = req.body;
      console.log(req.body);
      let result = new Result({
        name,
        school: companyy._id,
        score,
      });

      await result.save();

      return res.status(200).json({
        message: "Result Saved successfully",
      });
    } catch (error) {
      console.log(error);
      const errors = errorHandler.dbSchemaErrors(error);
      return res.status(403).json({ Message: errors });
    }
  }

//   static async getReports(req, res) {
//     try {
//       const reports = await Results.find()
//         .populate("engineer")
//         .populate("company")
//         .sort({ createdAt: -1 });
//       if (!reports) {
//         return res.status(400).json({ message: "Unable to load reports" });
//       }
//       return res.status(201).json({
//         status: 200,
//         message: reports,
//       });
//     } catch (error) {
//       console.log(error);
//       const errors = errorHandler.dbSchemaErrors(error);
//       return res.status(403).json({ Message: errors });
//     }
//   }

//   static async getReportss(req, res) {
//     try {
//       let reports = await Reports.find()
//         .sort({ createdAt: -1 })
//         .populate("company");
//       if (!reports) {
//         return res.status(400).json({ message: "Unable to load reports" });
//       }
//       return res.status(200).json({
//         status: 200,
//         message: reports,
//       });
//     } catch (error) {
//       console.log(error);
//       const errors = errorHandler.dbSchemaErrors(error);
//       return res.status(403).json({ Message: errors });
//     }
//   }

//   static async getReport(req, res) {
//     try {
//       let reports = await Reports.find(req.body).populate("company");
//       if (!reports) {
//         return res.status(400).json({ message: "Unable to load reports" });
//       }
//       return res.status(201).json({
//         status: 200,
//         message: reports,
//       });
//     } catch (error) {
//       console.log(error);
//       const errors = errorHandler.dbSchemaErrors(error);
//       return res.status(403).json({ Message: errors });
//     }
//   }

//   static async deleteReport(req, res) {
//     try {
//       let reports = await Reports.findById(req.params.id);
//       if (!reports) {
//         return res.status(400).json({ message: "report unavailable" });
//       }
//       await Reports.findByIdAndDelete(req.params.id);
//       return res.status(200).json({
//         message: "Report Successfully Deleted",
//       });
//     } catch (error) {
//       console.log(error);
//       const errors = errorHandler.dbSchemaErrors(error);
//       return res.status(403).json({ Message: errors });
//     }
//   }
}

module.exports = ResultController;
