import { computed } from "vue";
import { Foo } from "#my-module/types/foo";

export function useFoo() {
    const foo = computed<Foo>(() => ({bar: 'foo'}))
    const bar = computed<Foo | undefined>(() => undefined)

    return {
        foo,
        bar,
    }
}