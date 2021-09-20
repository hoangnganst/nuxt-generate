<template>
  <div class="app">
    <div class="calculator">
      <formular :formula="formula"></formular>
      <output-conculator :currentVal="currentVal"></output-conculator>
      <button-calculator
        :handleOperators="handleOperators"
        :handleNumbers="handleNumbers"
        :handleDecimal="handleDecimal"
        :initialize="initialize"
        :handleEvaluate="handleEvaluate"
        :handleClearOne="handleClearOne"
        :handleGetHistory="handleGetHistory"
      ></button-calculator>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ButtonCalculator from "../components/ButtonCalculator.vue";
import Formular from "../components/Formular.vue";
import OutputConculator from "../components/OutputConculator.vue";
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /\d[x/+‑]{1}‑$/;
export default {
  components: { ButtonCalculator, Formular, OutputConculator },
  data() {
    return {
      currentVal: "0",
      prevVal: "0",
      formula: "",
      currentSign: "pos",
      lastClicked: "",
      historyIndex: 0,
    };
  },
  methods: {
    maxDigitWarning() {
      this.prevVal = this.currentVal;
      this.currentVal = "Digit Limit Met";
      setTimeout(() => {
        this.currentVal = this.prevVal;
      }, 1000);
    },
    handleEvaluate() {
      if (!this.currentVal.includes("Limit")) {
        let expression = this.formula;
        while (endsWithOperator.test(expression)) {
          expression = expression.slice(0, -1);
        }
        expression = expression
          .replace(/x/g, "*")
          .replace(/‑/g, "-")
          .replace("--", "+0+0+0+0+0+0+");
        let answer =
          Math.round(1000000000000 * eval(expression)) / 1000000000000;
        this.setState({
          currentVal: answer.toString(),
          formula:
            expression
              .replace(/\*/g, "⋅")
              .replace(/-/g, "‑")
              .replace("+0+0+0+0+0+0+", "‑-")
              .replace(/(x|\/|\+)‑/, "$1-")
              .replace(/^‑/, "-") +
            "=" +
            answer,
          prevVal: answer,
          evaluated: true,
        });
      }
    },
    handleOperators(value) {
      console.log(this);

      if (!this.currentVal.includes("Limit")) {
        const { formula, prevVal, evaluated } = this;
        this.currentVal = value;
        this.evaluated = false;
        if (evaluated) {
          this.formula = prevVal + value;
        } else if (!endsWithOperator.test(formula)) {
          this.prevVal = formula;
          console.log(123);
          this.formula = formula + value;
        } else if (!endsWithNegativeSign.test(formula)) {
          this.formula =
            (endsWithNegativeSign.test(formula + value) ? formula : prevVal) +
            value;
        } else if (value !== "‑") {
          this.formula = prevVal + value;
        }
        this.historyIndex = 0;
      }
    },
    handleNumbers(value) {
      if (!this.currentVal.includes("Limit")) {
        const { currentVal, formula, evaluated } = this;
        this.evaluated = false;
        if (currentVal.length > 18) {
          this.maxDigitWarning();
        } else if (evaluated) {
          this.currentVal = value;
          this.formula = value !== "0" ? value : "";
        } else {
          this.currentVal =
            currentVal === "0" || isOperator.test(currentVal)
              ? value
              : currentVal + value;
          this.formula =
            currentVal === "0" && value === "0"
              ? formula === ""
                ? value
                : formula
              : /([^.0-9]0|^0)$/.test(formula)
              ? formula.slice(0, -1) + value
              : formula + value;
        }
      }
    },
    handleDecimal() {
      if (this.evaluated === true) {
        this.currentVal = "0.";
        this.formula = "0.";
        this.evaluated = false;
      } else if (
        !this.currentVal.includes(".") &&
        !this.currentVal.includes("Limit")
      ) {
        this.evaluated = false;
        if (this.currentVal.length > 21) {
          this.maxDigitWarning();
        } else if (
          endsWithOperator.test(this.formula) ||
          (this.currentVal === "0" && this.formula === "")
        ) {
          this.currentVal = "0.";
          this.formula = this.formula + "0.";
        } else {
          this.currentVal = this.formula.match(/(-?\d+\.?\d*)$/)[0] + ".";
          this.formula = this.formula + ".";
        }
      }
    },
    initialize() {
      this.currentVal = "0";
      this.prevVal = "0";
      this.formula = "";
      this.currentSign = "pos";
      this.lastClicked = "";
      this.evaluated = false;
      this.$store.dispatch("calculator/deleteHistory");
      this.historyIndex = 0;
    },
    handleEvaluate() {
      if (this.currentVal !== "0" && this.formula !== "" && !this.evaluated)
        if (!this.currentVal.includes("Limit")) {
          let expression = this.formula;
          while (endsWithOperator.test(expression)) {
            expression = expression.slice(0, -1);
          }
          expression = expression
            .replace(/x/g, "*")
            .replace(/‑/g, "-")
            .replace("--", "+0+0+0+0+0+0+");
          let answer =
            Math.round(1000000000000 * eval(expression)) / 1000000000000;
          this.currentVal = answer.toString();
          this.formula =
            expression
              .replace(/\*/g, "⋅")
              .replace(/-/g, "‑")
              .replace("+0+0+0+0+0+0+", "‑-")
              .replace(/(x|\/|\+)‑/, "$1-")
              .replace(/^‑/, "-") +
            "=" +
            answer;
          this.prevVal = answer;
          this.evaluated = true;
          this.$store.dispatch("calculator/addHistory", {
            formula: this.formula,
            answer: answer,
          });
          this.historyIndex = 0;
        }
    },
    handleClearOne() {
      if (!this.evaluated) {
        this.formula = this.formula.substr(0, this.formula.length - 1);
        this.currentVal =
          this.currentVal.length > 1
            ? this.currentVal.substr(0, this.currentVal.length - 1)
            : "0";
        this.prevVal = "0";
      }
    },
    handleGetHistory() {
      console.log(this);
      if (this.history.length > 0) {
        this.formula = this.history[this.historyIndex].formula;
        this.prevVal = this.history[this.historyIndex].answer;
        this.historyIndex =
          this.history.length - 1 > this.historyIndex
            ? ++this.historyIndex
            : this.historyIndex;
        this.currentVal = "History";
        this.lastClicked = "";
        this.evaluated = true;
      }
    },
  },
  computed: {
    ...mapState({
      history: (state) => state.calculator.history,
    }),
  },
};
</script>


<style>
.calculator {
  border: 2px solid #47476b;
  padding: 5px;
  background: rgb(0, 0, 0);
  width: 280px;
  position: absolute;
  border-radius: 10px;
}
.app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  background: #ddf1d8;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}
</style>

