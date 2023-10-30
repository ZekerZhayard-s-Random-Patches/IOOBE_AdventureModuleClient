
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "AdventureModuleClient_affixTooltips": {
            "target": {
                "type": "METHOD",
                "class": "dev/shadowsoffire/apotheosis/adventure/client/AdventureModuleClient",
                "methodName": "affixTooltips",
                "methodDesc": "(Lnet/minecraftforge/event/entity/player/ItemTooltipEvent;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEINTERFACE && node.owner.equals("java/util/List") && node.name.equals("addAll") && node.desc.equals("(ILjava/util/Collection;)Z")) {
                        mn.instructions.set(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "io/github/zekerzhayard/ioobe_adventuremoduleclient/IOOBE_AdventureModuleClient", "addAll", "(Ljava/util/List;ILjava/util/Collection;)Z", false));
                    }
                }
                return mn;
            }
        }
    }
}
