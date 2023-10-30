package io.github.zekerzhayard.ioobe_adventuremoduleclient;

import java.util.Collection;
import java.util.List;

import net.minecraft.network.chat.Component;
import net.minecraftforge.fml.common.Mod;

@Mod(IOOBE_AdventureModuleClient.MODID)
public class IOOBE_AdventureModuleClient {
    public static final String MODID = "ioobe_adventuremoduleclient";

    public static boolean addAll(List<Component> tooltip, int index, Collection<Component> components) {
        if (tooltip.size() < index) {
            return tooltip.addAll(tooltip.size(), components);
        } else {
            return tooltip.addAll(index, components);
        }
    }
}
