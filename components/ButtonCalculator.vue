<template>
  <div class="button-wrapper">
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="operation-style"
        @click="initialize()"
      >
        AC
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="operation-style"
        @click="handleClearOne()"
      >
        <a-icon type="left-circle" />
      </a-button>
    </span>
    <span>
      <a-button
        value="%"
        type="primary"
        shape="circle"
        class="operation-style"
        @click="handleGetHistory()"
      >
        <a-icon type="history" />
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="operation-style"
        @click="handleOperators('/')"
      >
        /
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('7')"
      >
        7
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('8')"
      >
        8
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('9')"
      >
        9
      </a-button>
    </span>
    <span>
      <a-button
        @click="handleOperators('x')"
        type="primary"
        shape="circle"
        class="operation-style"
      >
        x
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('4')"
      >
        4
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('5')"
      >
        5
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('6')"
      >
        6
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="operation-style"
        @click="handleOperators('‑')"
      >
        ‑
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('1')"
      >
        1
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('2')"
      >
        2
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleNumbers('3')"
      >
        3
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="operation-style"
        @click="handleOperators('+')"
      >
        +
      </a-button>
    </span>
    <span>
      <a-button
        @click="handleNumbers('0')"
        type="primary"
        shape="circle"
        class="number-style"
      >
        0
      </a-button>
    </span>
    <span>
      <a-button
        type="primary"
        shape="circle"
        class="number-style"
        @click="handleDecimal()"
      >
        ,
      </a-button>
    </span>
    <span class="equal">
      <a-button
        block
        type="primary"
        shape="round"
        class="equal-style"
        @click="handleEvaluate()"
      >
        =
      </a-button>
    </span>
    <span> </span>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    handleOperators: Function,
    handleNumbers: Function,
    handleDecimal: Function,
    initialize: Function,
    handleEvaluate: Function,
    handleClearOne: Function,
    handleGetHistory: Function,
  },
};
</script>

<style>
.button-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;
}
.button-wrapper span {
  display: flex;
  justify-content: center;
}
.button-wrapper span button {
  background-color: transparent;
  font-weight: 500;
  border: none;
}
.button-wrapper span button:focus {
  background-color: transparent;
  border: none;
}
.button-wrapper span button:hover {
  background-color: transparent;
}
.button-wrapper span .operation-style:focus {
  color: orange;
}
.operation-style {
  color: orange;
}
.equal-style {
  background-color: orange !important;
}
.equal {
  grid-column: 3/5;
}
</style>
