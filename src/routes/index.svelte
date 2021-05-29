<script context="module" type="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const inputs = [
      "Hello there",
      "General Kenevefiyimubi",
      "You are a bolamepidigold one",
      "Kihiniyerijill him",
    ];

    const outputs = await Promise.all(
      inputs.map(async (text) => {
        const res = await fetch("/echo", {
          headers: { "content-type": "text/plain" },
          body: text,
        });
        return await res.text();
      })
    );

    return { props: { inputs, outputs } };
  };
</script>

<script type="ts">
  export let inputs: string[];
  export let outputs: string[];
</script>

<h1><code>fetch</code> body hash collision in <code>load</code></h1>

<h2>Expected</h2>
<ul>
  {#each inputs as input}
    <li>{input}</li>
  {/each}
</ul>

<h2>Actual</h2>
<ul>
  {#each outputs as output}
    <li>{output}</li>
  {/each}
</ul>
