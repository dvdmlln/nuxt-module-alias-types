import { computed } from "vue";
import { Foo } from "../types/foo";

export function useBar() {
    const foo = computed<Foo>(() => ({bar: 'foo'}))
    const bar = computed<Foo | undefined>(() => undefined)

    return {
        foo,
        bar,
    }
}